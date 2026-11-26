import{_ as n}from"./chunks/ArticlePage.BzJfrCud.js";import{o as s,c as e,m as t}from"./chunks/framework.CZZR5ESy.js";const d=JSON.parse('{"title":"RPC 调用原理、故障排查与服务治理","titleTemplate":":title · 知行笔记","description":"库存服务返回了超时，下单服务该不该再调一次？先弄清请求可能走到了哪一步。客户端排队时超时，库存服务可能连请求都没收到。库存事务提交后响应丢失，再扣一次就会出问题。RPC 排查最有用的信息，通常是请求卡在哪一段、服务端是否执行过，以及调用方还","frontmatter":{"title":"RPC 调用原理、故障排查与服务治理","titleTemplate":":title · 知行笔记","description":"库存服务返回了超时，下单服务该不该再调一次？先弄清请求可能走到了哪一步。客户端排队时超时，库存服务可能连请求都没收到。库存事务提交后响应丢失，再扣一次就会出问题。RPC 排查最有用的信息，通常是请求卡在哪一段、服务端是否执行过，以及调用方还","kb":"{\\"kind\\":\\"article\\",\\"doc\\":{\\"id\\":\\"rpc-principles-and-practice\\",\\"title\\":\\"RPC 调用原理、故障排查与服务治理\\",\\"category\\":\\"架构设计\\",\\"tags\\":[\\"rpc\\",\\"grpc\\",\\"protobuf\\",\\"timeout\\",\\"retry\\",\\"idempotency\\",\\"service-discovery\\",\\"load-balancing\\",\\"circuit-breaker\\"],\\"readingMinutes\\":16},\\"toc\\":[{\\"title\\":\\"一次调用经过哪些地方\\",\\"level\\":2,\\"id\\":\\"一次调用经过哪些地方\\"},{\\"title\\":\\"协议、编解码和兼容性\\",\\"level\\":3,\\"id\\":\\"协议编解码和兼容性\\"},{\\"title\\":\\"用 gRPC Stub 跟一次真实调用\\",\\"level\\":3,\\"id\\":\\"用-grpc-stub-跟一次真实调用\\"},{\\"title\\":\\"先判断错误发生在哪里\\",\\"level\\":2,\\"id\\":\\"先判断错误发生在哪里\\"},{\\"title\\":\\"从调用方核对域名和连接\\",\\"level\\":3,\\"id\\":\\"从调用方核对域名和连接\\"},{\\"title\\":\\"超时、重试与幂等\\",\\"level\\":2,\\"id\\":\\"超时重试与幂等\\"},{\\"title\\":\\"库存写入的幂等示例\\",\\"level\\":3,\\"id\\":\\"库存写入的幂等示例\\"},{\\"title\\":\\"服务发现、流量隔离与过载保护\\",\\"level\\":2,\\"id\\":\\"服务发现流量隔离与过载保护\\"},{\\"title\\":\\"注册中心断连时怎么取舍\\",\\"level\\":3,\\"id\\":\\"注册中心断连时怎么取舍\\"},{\\"title\\":\\"路由和动态分组怎么配合\\",\\"level\\":3,\\"id\\":\\"路由和动态分组怎么配合\\"},{\\"title\\":\\"发布时怎么接流量和退流量\\",\\"level\\":3,\\"id\\":\\"发布时怎么接流量和退流量\\"},{\\"title\\":\\"协议迁移、泛化调用与流量回放\\",\\"level\\":2,\\"id\\":\\"协议迁移泛化调用与流量回放\\"},{\\"title\\":\\"一次超时故障怎么查\\",\\"level\\":2,\\"id\\":\\"一次超时故障怎么查\\"}],\\"standaloneTitle\\":\\"\\"}"},"headers":[],"relativePath":"articles/rpc-principles-and-practice.md","filePath":"articles/rpc-principles-and-practice.md"}'),a={name:"articles/rpc-principles-and-practice.md"},r=Object.assign(a,{setup(l){const c=`<p>库存服务返回了超时，下单服务该不该再调一次？先弄清请求可能走到了哪一步。客户端排队时超时，库存服务可能连请求都没收到。库存事务提交后响应丢失，再扣一次就会出问题。RPC 排查最有用的信息，通常是请求卡在哪一段、服务端是否执行过，以及调用方还有多少时间。</p>
<h2 id="一次调用经过哪些地方">一次调用经过哪些地方</h2>
<pre><code class="hljs language-text">调用方 → Stub / 代理 → 服务发现的本地快照 → 路由和健康筛选
      → 负载均衡 → 连接与传输 → 服务端解码、派发 → 业务执行 → 响应
</code></pre>
<p>Stub 把接口方法和参数转换成请求，再把响应或错误交还给调用方。Java 可以用生成的 Stub，也可以让动态代理拦截接口方法。启动时校验方法映射，记得在本地处理 <code>toString()</code> 等本地方法。客户端拦截器适合补上认证、链路信息和耗时统计，传输层管连接和消息，服务端的业务限流和数据库事务各归自己的执行层。</p>
<p>同步接口可以在业务线程等待异步结果。自研多路复用协议时，常见实现是发送前按请求 ID 登记待完成的 Future，响应回来后按 ID 查找。写失败、超时、取消、连接关闭都要清掉待完成条目。响应与超时可能同时发生，只让其中一个完成 Future，迟到的响应丢弃并计数。事件循环负责收发和派发，SQL、阻塞文件 I/O 和重回调要交给有界执行器。异步队列和在途请求也要设上限，否则堆积会先变成内存和尾延迟问题。</p>
<p>阻塞 I/O 的线程在等待读写时无法处理其他任务。NIO 可以靠少量事件循环管理许多连接，但读就绪只表示可以尝试读取，解码器仍要判断消息有没有收全。用长连接时，调用方按目标复用 channel，观察连接建立和连接内排队。排队升高时，先区分流并发上限和服务端真的处理不过来。</p>
<p>维护框架时，可以把名称解析、路由、负载均衡、编解码和传输定义成独立接口。比如从固定权重切到最少在途请求，只替换节点选择策略。用同一组用例检查节点下线、选不到节点以及取消后的行为，调用接口和编解码无需随策略修改。<a href="https://grpc.io/docs/guides/custom-load-balancing/">gRPC 负载均衡扩展</a></p>
<h3 id="协议编解码和兼容性">协议、编解码和兼容性</h3>
<p>TCP 提供字节流。自定义协议可以用固定头加负载的形式，定义魔数、版本、消息类型、请求 ID、负载长度。先读齐头部，校验长度上限后再分配缓冲区，处理半包、多条消息连在一起和畸形长度。校验解压后的大小，序列化格式由双方约定，避免让对端指定任意本地类型反序列化。</p>
<p>序列化方案先看客户端语言、字段演进和调试需求。需要人工查看或已有 HTTP/JSON 客户端时，JSON 通常更方便。多语言 SDK 需要共享类型定义时，可以用 Protobuf 生成各端代码。替换编码之前，用真实请求比较编码和解码耗时、内存分配和消息大小，尤其要包含实际的批量请求和大字段。</p>
<p>gRPC 常在 HTTP/2 上运行。一个调用占用一个流，gRPC 消息还有自己的压缩标记和长度前缀。排查抓包时区分连接、HTTP/2 流和 gRPC 消息，一个 DATA 帧的边界不一定等于一条完整消息。HTTP 响应码是 200 时也要看最终的 <code>grpc-status</code>。压缩开关按真实负载评估，记录带宽、CPU 和 P99，小请求通常没有必要为节约少量字节支付压缩开销。<a href="https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md">gRPC over HTTP/2 协议</a></p>
<p>Protobuf 加字段时用新的字段编号，旧字段删除后把编号和名称加进 <code>reserved</code>，升级前跑旧客户端对新服务端、新客户端对旧服务端两组测试。即使能解码，也要验证字段缺省时的业务含义。比如新客户端增加仓库编号，旧服务端忽略它就可能扣到错误的仓库，路由或能力协商必须确保带仓库编号的请求由支持该语义的节点处理。<a href="https://protobuf.dev/programming-guides/proto3/#updating">Proto3 消息更新规则</a></p>
<p>下面是库存查询的最小接口定义。客户端生成 Stub 时依赖它，服务端注册同一服务实现。发布后不要重新分配字段编号。</p>
<pre><code class="hljs language-proto">syntax = <span class="hljs-string">&quot;proto3&quot;</span>;
<span class="hljs-keyword">package</span> inventory.v1;
<span class="hljs-keyword">option</span> java_multiple_files = <span class="hljs-literal">true</span>;

<span class="hljs-keyword">service </span><span class="hljs-title class_">Inventory</span> {
  <span class="hljs-function"><span class="hljs-keyword">rpc</span> GetAvailability(GetAvailabilityRequest) <span class="hljs-keyword">returns</span> (GetAvailabilityReply)</span>;
}

<span class="hljs-keyword">message </span><span class="hljs-title class_">GetAvailabilityRequest</span> {
  <span class="hljs-type">string</span> sku = <span class="hljs-number">1</span>;
  <span class="hljs-keyword">optional</span> <span class="hljs-type">string</span> warehouse_id = <span class="hljs-number">2</span>; <span class="hljs-comment">// 可以区分未设置和显式空字符串</span>
}

<span class="hljs-keyword">message </span><span class="hljs-title class_">GetAvailabilityReply</span> {
  <span class="hljs-type">int32</span> available = <span class="hljs-number">1</span>;
}
</code></pre>
<h3 id="用-grpc-stub-跟一次真实调用">用 gRPC Stub 跟一次真实调用</h3>
<p>从上面的 <code>.proto</code> 生成 Java 消息类和 gRPC Stub，服务端继承生成的 <code>InventoryImplBase</code> 并注册到 Server。下例放在已有 gRPC Java 客户端里，<code>channel</code> 由客户端初始化并复用。</p>
<pre><code class="hljs language-java"><span class="hljs-comment">// 构造只读查询，指定 SKU 和仓库。</span>
<span class="hljs-type">var</span> <span class="hljs-variable">request</span> <span class="hljs-operator">=</span> GetAvailabilityRequest.newBuilder()
        .setSku(<span class="hljs-string">&quot;SKU-1001&quot;</span>)
        .setWarehouseId(<span class="hljs-string">&quot;east&quot;</span>)
        .build();

<span class="hljs-comment">// 在这次调用上设置 150 ms 的 deadline，通过生成的 Stub 发送请求。</span>
<span class="hljs-type">var</span> <span class="hljs-variable">reply</span> <span class="hljs-operator">=</span> InventoryGrpc.newBlockingStub(channel)
        .withDeadlineAfter(<span class="hljs-number">150</span>, java.util.concurrent.TimeUnit.MILLISECONDS)
        .getAvailability(request);
</code></pre>
<p>跟源码时，可以在客户端拦截器、服务端拦截器和 <code>getAvailability</code> 实现各设一个断点。客户端先拿到方法描述和消息，再由调用层将消息交给传输。服务端按方法全名找到已注册的处理器，解码后派发到业务实现。验证超时时用测试环境让服务端延迟返回，观察客户端收到 <code>DEADLINE_EXCEEDED</code>，再检查服务端是否能及时停止可取消的工作。阻塞 Stub 只在允许等待的线程里使用。<a href="https://grpc.io/docs/languages/java/basics/">gRPC Java 基础教程</a></p>
<h2 id="先判断错误发生在哪里">先判断错误发生在哪里</h2>
<p>按调用方法、目标实例和版本分组看，先对齐故障时间，再把一次逻辑调用拆成各次尝试。用 trace ID 找到两端记录，核对客户端取连接或排队时间、服务端入队和开始执行时间、下游耗时以及返回状态。日志中可以带请求 ID 和幂等键的脱敏值，指标标签使用服务、方法、状态、版本等低基数字段。</p>
<table>
<thead>
<tr>
<th>现象</th>
<th>先找什么证据</th>
<th>确认后怎么处理</th>
</tr>
</thead>
<tbody>
<tr>
<td>客户端没有可用实例</td>
<td>查看客户端发现快照的版本、更新时间、路由分组和筛选后的实例数</td>
<td>恢复订阅或修正分组、权重、版本标签。保留已经验证过的上一份配置用于回退</td>
</tr>
<tr>
<td><code>UNAVAILABLE</code> 集中在少数实例</td>
<td>核对连接失败、TLS 握手、就绪状态和发布记录。确认是选中了异常节点还是整个服务不可达</td>
<td>摘除坏节点或回退版本，同时观察剩余节点容量</td>
</tr>
<tr>
<td><code>DEADLINE_EXCEEDED</code>，服务端没有开始执行</td>
<td>查客户端队列、连接建立、HTTP/2 流并发上限、服务端队列。先确认日志和采样是否足以判断</td>
<td>限制在途请求，缩短或清理过期排队，定位容量瓶颈</td>
</tr>
<tr>
<td><code>DEADLINE_EXCEEDED</code>，服务端已经执行</td>
<td>从 trace 看数据库锁、连接池等待、慢查询或下游 RPC。写操作核对操作记录和提交结果</td>
<td>修复最慢阶段。写结果不明时，用原幂等键查状态或重试</td>
</tr>
<tr>
<td><code>RESOURCE_EXHAUSTED</code> 或队列持续升高</td>
<td>区分配额拒绝、并发上限、消息大小限制和重试放大</td>
<td>先压住新增流量和重试，对照配额和负载看扩容或调整配置的效果</td>
</tr>
<tr>
<td>某版本返回 <code>UNIMPLEMENTED</code> 或解码错误</td>
<td>对照部署版本、方法名、字段编号、协议和入口地址</td>
<td>回退路由到兼容实例，跑双向兼容测试后再放量</td>
</tr>
<tr>
<td>连得上但 401、403 或对应 gRPC 状态</td>
<td>查入口与服务端身份、证书有效期、令牌目标受众和方法授权</td>
<td>修正身份或权限配置，复查有效和无效凭据各一次</td>
</tr>
</tbody>
</table>
<h3 id="从调用方核对域名和连接">从调用方核对域名和连接</h3>
<p>在实际发起 RPC 的主机或容器里执行。示例使用 TLS 入口 <code>inventory.example.com:443</code>，替换为实际地址。</p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 查看调用方环境通过系统解析器得到的地址</span>
getent ahosts inventory.example.com

<span class="hljs-comment"># 查看当前网络命名空间内到 443 端口的已建立 TCP 连接，再核对对端 IP</span>
ss -nt state established <span class="hljs-string">&#x27;( dport = :443 )&#x27;</span>

<span class="hljs-comment"># 指定 SNI，验证入口证书链及域名，并通过 ALPN 请求 HTTP/2</span>
openssl s_client -connect inventory.example.com:443 -servername inventory.example.com \\
  -verify_hostname inventory.example.com -verify_return_error -alpn h2 &lt;/dev/null
</code></pre>
<p>例如最后一条出现 <code>ALPN protocol: h2</code> 和 <code>Verify return code: 0 (ok)</code>，表示这次 TLS 探测协商了 HTTP/2，证书校验通过。还要用实际客户端核对方法、认证和调用结果。内网 CA 用 <code>-CAfile</code> 指向受信任的 CA 文件。旧版 OpenSSL 如果缺少相应选项，用具备同等校验能力的客户端探测。</p>
<details class="install-guide">
<summary>安装排查工具</summary>
<p>在有授权且软件源可用的 Linux 环境操作。Ubuntu／Debian 的 <code>getent</code> 来自 <code>libc-bin</code>，RHEL 系一般随 <code>glibc-common</code> 或 <code>glibc</code> 提供，通常随系统已有。</p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># Ubuntu／Debian 安装 ss 和 openssl</span>
<span class="hljs-built_in">sudo</span> apt install iproute2 openssl

<span class="hljs-comment"># 使用 dnf 的 RHEL 系发行版安装同类工具</span>
<span class="hljs-built_in">sudo</span> dnf install iproute openssl

<span class="hljs-comment"># CentOS 7 使用已有获准的软件源安装同类工具</span>
<span class="hljs-built_in">sudo</span> yum install iproute openssl

<span class="hljs-comment"># 确认可在当前 Shell 找到这三个工具</span>
<span class="hljs-built_in">command</span> -v getent ss openssl
</code></pre>
</details>
<h2 id="超时重试与幂等">超时、重试与幂等</h2>
<p>入口先确定整条请求的 deadline，每跳用剩余时间扣除本地工作和返回缓冲，再传给下游。比如库存查询拿到 260 ms，可给两次尝试各 110 ms，预留最多 20 ms 退避和 20 ms 返回。如果第一次结束后只剩 65 ms，而下一次通常至少需要 80 ms，就直接结束。退避加入随机抖动，次数上限包含首次调用。部署前确认 SDK、网关和服务中间层分别在哪儿重试，尽量由一层管理重试预算。<a href="https://grpc.io/docs/guides/deadlines/">gRPC deadlines</a> · <a href="https://grpc.io/docs/guides/retry/">gRPC retry</a></p>
<p>对只读或已具备幂等保护的方法，可在剩余预算允许时重试部分瞬时错误，例如短暂的 <code>UNAVAILABLE</code>。如果已确认第一次败在某个节点，且框架支持按尝试重新选节点，让负载均衡优先从其他符合路由条件的健康节点选择。参数错误和权限错误应直接返回。遇到 <code>DEADLINE_EXCEEDED</code> 时，服务端可能已经完成写入。收到取消后，服务端及时停止可中断工作，并用同一预算约束数据库和下游调用。已经提交的写入仍须通过业务状态判断。</p>
<h3 id="库存写入的幂等示例">库存写入的幂等示例</h3>
<ol>
<li>下单服务为一次库存预留生成操作 ID，首次调用、网络超时后的重试和后续查询都沿用它。</li>
<li>库存服务以 <code>租户 + 操作类型 + 操作 ID</code> 做唯一键，同时记录关键业务参数的摘要。相同键却带不同 SKU 或数量时，返回明确冲突。</li>
<li>在同一数据库事务中写操作记录、预留库存和保存结果。并发重复请求由唯一约束串行化，按数据库的冲突语义回读已提交结果。跨系统副作用可通过事务 Outbox 加下游去重延续同一操作 ID。</li>
<li>如果预留成功但响应丢失，调用方用原键查状态或重发。同一个操作 ID 的两次并发调用、提交后丢响应、事务回滚后重试都应有测试。</li>
</ol>
<p>若自研协议需要管理大量在途请求，可以用时间轮按到期时间把超时任务放进不同槽位。每个 tick 处理到期槽，跨轮任务记录剩余轮数或放入上层轮。用单调时钟检查实际 deadline，避免舍入导致提前失败。tick 越粗，检测延迟越明显，线程调度和 GC 也会增加延迟。响应完成后取消超时任务，定时回调保持轻量，监控处理滞后和待处理任务数量。</p>
<h2 id="服务发现流量隔离与过载保护">服务发现、流量隔离与过载保护</h2>
<ul>
<li><strong>服务发现</strong>。注册中心记录实例和元数据，客户端通过订阅持有本地快照。短时断连可以继续使用最近一次有效的快照，同时根据连接失败或健康变化跳过坏实例。设定可以容忍的快照陈旧时间，重连后以新版本或全量快照收敛，避免迟到通知把已删除实例加回来。涉及跨租户隔离或撤销权限时，按安全规则决定是否还能使用旧配置。</li>
<li><strong>健康检查与负载均衡</strong>。连接心跳只反映连接活性。就绪检查反映实例当前能否接流量，业务错误和被动摘除也要纳入判断。实例处理能力相近可先用轮询。容量不同可配置权重。请求耗时差异大时可比较在途数或延迟反馈，给新节点留预热时间。一致性哈希适合需要黏性的键，还要测热点键和扩缩容后的迁移量。<a href="https://grpc.io/docs/guides/health-checking/">gRPC health checking</a></li>
<li><strong>业务分组</strong>。下单流量和离线盘点可以通过 <code>服务 + 分组</code> 发现不同实例，再分别限流。若两组仍共享数据库、连接池或线程池，也要限制对应资源的占用。为核心调用配置限额明确的备用组，只在主组不可用时切换，恢复时逐步切回，并保证备用组符合数据和权限边界。开发机与测试环境使用不同的注册命名空间或注册中心，避免本地启动的同名服务被联调调用方意外选中。</li>
<li><strong>过载保护</strong>。入口用限速和并发上限拒绝超额流量，队列设上限并尽早丢弃已过期请求。调用方熔断器按下游和方法观察失败，打开后快速返回，半开时只放少量请求探测；同时给下游依赖独立的执行资源和并发额度。流式传输还要跟随接收端的消费速度，避免无界缓冲。<a href="https://grpc.io/docs/guides/flow-control/">gRPC flow control</a></li>
</ul>
<h3 id="注册中心断连时怎么取舍">注册中心断连时怎么取舍</h3>
<p>把注册数据的一致性和调用能否继续分开考虑。采用多数派提交时，失去多数派的一侧无法继续确认最新注册变更。允许各侧继续接受和返回注册数据，则需要处理网络恢复后的合并，以及临时出现的漏选或误选。调用方可以继续使用已收到的快照，在限定时间内访问仍健康的实例。若使用增量通知，订阅断开后从最近版本恢复，版本无法接续时重新拉全量；在变更尚未收敛时，用主动探测和被动摘除减少失败请求。<a href="https://etcd.io/docs/v3.6/learning/api_guarantees/">etcd API 一致性保证</a></p>
<h3 id="路由和动态分组怎么配合">路由和动态分组怎么配合</h3>
<p>路由先圈定候选实例，再由负载均衡选一个。例如新版库存逻辑只对灰度租户开放，先用已验证的租户身份匹配路由，再从 <code>version=v2</code> 的健康实例中按权重选。匹配为空时按事先约定失败或回退。跨租户、跨环境或跨数据区域的边界不能靠负载均衡兜底。</p>
<p>盘点组突然缺容量时，可以把已经预热的共享实例临时加入该组。先检查服务端是否接受新分组，登记带版本的分组变更，观察调用方候选列表和流量，再逐步加权。追加分组时要考虑实例承受两组流量的总上限；替换分组时先确认原组剩余容量。恢复时撤掉新增权重、等旧请求排空，再移除成员。注册数据、路由下发和实例实际接收的分组需要一致。</p>
<h3 id="发布时怎么接流量和退流量">发布时怎么接流量和退流量</h3>
<ol>
<li>新实例加载配置、建立必要连接、完成预热后才标记就绪。先少量接流，按版本比较错误率、P99、排队与资源占用。批量滚动发布时，上一批实例达到正常承载能力后再动下一批，给仍在接流量的实例留足容量。</li>
<li>旧实例先移出就绪和路由，再进入排空。给发现和入口留出传播时间，约定新请求在过渡阶段如何拒绝或改投。已有调用在统一的关停时限内自然结束，长流会话要有重连或恢复安排。</li>
<li>超过关停期限再强制退出，记录仍在执行的调用。动态扩组要等目标组有足够健康容量，再提高权重。缩组先降权和排空，再释放资源。按固定条件停止放量，并保留上一版路由和可用节点用于回退。<a href="https://grpc.io/docs/guides/graceful-stop/">gRPC graceful shutdown</a></li>
</ol>
<h2 id="协议迁移泛化调用与流量回放">协议迁移、泛化调用与流量回放</h2>
<p>迁移时先列一张客户端版本、服务端版本和协议的兼容矩阵。可以用不同端口、入口或明确的协议标识分流，协议适配层统一进入同一业务实现。先部署双协议服务端，再分批切换调用方。若共享一个端口，必须有明确的识别规则，识别失败直接返回，避免按几种解码器轮流猜测。适配层还要保留入站协议，按相应格式编码响应。灰度比较结果、状态映射、超时、取消和大包行为，旧客户端流量归零并过了约定回退窗口后，再下线旧协议。</p>
<p>路由、重试和负载均衡可以放在 SDK，也可能由服务网格承担。调整之前先清点谁负责哪段调用。例如 SDK 和代理都允许一次重试，单次业务调用最坏可能变成四次下游尝试。迁移验收时按逻辑调用 ID 统计尝试数，并测试代理故障时的行为。</p>
<p>网关或调试工具可以通过 Protobuf descriptor 动态构造请求并发给已知的服务和方法。限制服务和方法白名单，按 schema 校验字段、类型和消息大小，保留调用身份。用 TLS 验证服务身份，需要双向身份时使用 mTLS，并在服务端对调用方身份做方法级授权。统一错误状态和诊断字段，内部异常栈留在受控日志里。<a href="https://grpc.io/docs/guides/auth/">gRPC authentication</a></p>
<p>流量回放可比较新旧实现对同一批请求的结果。先脱敏，再让待测版本接入隔离环境，替换真实支付、消息发布等有副作用的下游，或把写入导向隔离存储。把时间戳、随机 ID 等非确定字段单独处理，比较业务结果、状态码和耗时分布。逐步提高回放比例，监控隔离环境容量。</p>
<h2 id="一次超时故障怎么查">一次超时故障怎么查</h2>
<p>假设下单成功率下跌，库存查询的 P99 从 60 ms 升到 280 ms，库存服务的执行 P99 仍约 40 ms。按以下顺序确认。</p>
<ol>
<li>按调用方、方法和库存实例拆指标。若超时只集中在盘点开始后，先查下单和盘点是否还共享同一个实例池或资源池。</li>
<li>选一条超时 trace。示例中客户端等待 10 ms，服务端排队 215 ms，执行 35 ms，指向服务端排队。再查看执行器队列、在途量和数据库连接池，找出首先达到上限的资源。</li>
<li>比较原始请求次数和总尝试数。若每秒 1,000 次逻辑调用产生 1,700 次尝试，继续扩大重试会把压力推回库存服务。先压低盘点流量和重试，再决定是否隔离资源或扩容。</li>
<li>复查下单成功率、P99、库存队列和每次调用的平均尝试数。抽查超时的写入，确认同一个操作 ID 只有一条预留记录。</li>
</ol>
`;return(u,p)=>(s(),e("div",null,[t(n,{doc:JSON.parse(u.$frontmatter.kb).doc,content:c,base:"../"},null,8,["doc"])]))}});export{d as __pageData,r as default};
