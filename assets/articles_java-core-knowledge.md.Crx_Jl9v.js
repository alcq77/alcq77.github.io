import{_ as n}from"./chunks/ArticlePage.B3eJjdtq.js";import{o as a,c as t,q as e}from"./chunks/framework.Biz6_gAU.js";const d=JSON.parse('{"title":"Java 核心知识与问题解析","titleTemplate":":title · 知行笔记","description":"同一段 Java 代码，换一个线程池、垃圾收集器或事务边界，运行结果可能截然不同。下面从语言和集合入手，依次讨论并发、虚拟机、现场诊断和服务端框架。代码以 Java 17 的语法和 API 为基准，诊断命令以 HotSpot 为例。 想弄清","frontmatter":{"title":"Java 核心知识与问题解析","titleTemplate":":title · 知行笔记","description":"同一段 Java 代码，换一个线程池、垃圾收集器或事务边界，运行结果可能截然不同。下面从语言和集合入手，依次讨论并发、虚拟机、现场诊断和服务端框架。代码以 Java 17 的语法和 API 为基准，诊断命令以 HotSpot 为例。 想弄清","kb":"{\\"kind\\":\\"article\\",\\"doc\\":{\\"id\\":\\"java-core-knowledge\\",\\"title\\":\\"Java 核心知识与问题解析\\",\\"category\\":\\"Java 开发\\",\\"tags\\":[\\"Java\\",\\"面试\\",\\"JVM\\",\\"集合\\",\\"并发\\",\\"NIO\\",\\"GC\\",\\"JMM\\",\\"性能诊断\\",\\"Spring\\",\\"MyBatis\\",\\"Netty\\",\\"Snowflake\\"],\\"readingMinutes\\":48},\\"toc\\":[{\\"title\\":\\"01. 同一个 class 文件为什么能在不同机器上运行？\\",\\"level\\":2,\\"id\\":\\"01-同一个-class-文件为什么能在不同机器上运行\\"},{\\"title\\":\\"02. 哪些异常应该在当前层处理？\\",\\"level\\":2,\\"id\\":\\"02-哪些异常应该在当前层处理\\"},{\\"title\\":\\"03. final 能锁住什么？资源由谁关闭？\\",\\"level\\":2,\\"id\\":\\"03-final-能锁住什么资源由谁关闭\\"},{\\"title\\":\\"04. 缓存、注册表和本地句柄分别需要哪种引用？\\",\\"level\\":2,\\"id\\":\\"04-缓存注册表和本地句柄分别需要哪种引用\\"},{\\"title\\":\\"05. 拼接字符串和读写字节分别怎么选？\\",\\"level\\":2,\\"id\\":\\"05-拼接字符串和读写字节分别怎么选\\"},{\\"title\\":\\"06. 什么时候值得用动态代理？\\",\\"level\\":2,\\"id\\":\\"06-什么时候值得用动态代理\\"},{\\"title\\":\\"07. Integer 的值、身份和大小为什么是三回事？\\",\\"level\\":2,\\"id\\":\\"07-integer-的值身份和大小为什么是三回事\\"},{\\"title\\":\\"08. 顺序列表、双端队列和优先队列怎样选择？\\",\\"level\\":2,\\"id\\":\\"08-顺序列表双端队列和优先队列怎样选择\\"},{\\"title\\":\\"09. HashMap 为什么扩容，又为什么有时会树化？\\",\\"level\\":2,\\"id\\":\\"09-hashmap-为什么扩容又为什么有时会树化\\"},{\\"title\\":\\"10. ConcurrentHashMap 能保证哪些操作一起完成？\\",\\"level\\":2,\\"id\\":\\"10-concurrenthashmap-能保证哪些操作一起完成\\"},{\\"title\\":\\"11. 一个线程怎样照看许多连接？\\",\\"level\\":2,\\"id\\":\\"11-一个线程怎样照看许多连接\\"},{\\"title\\":\\"12. 文件复制、零拷贝和分散读有什么区别？\\",\\"level\\":2,\\"id\\":\\"12-文件复制零拷贝和分散读有什么区别\\"},{\\"title\\":\\"13. 什么时候提取接口，什么时候保留抽象类？\\",\\"level\\":2,\\"id\\":\\"13-什么时候提取接口什么时候保留抽象类\\"},{\\"title\\":\\"14. 单例、工厂、代理和外观各处理什么变化？\\",\\"level\\":2,\\"id\\":\\"14-单例工厂代理和外观各处理什么变化\\"},{\\"title\\":\\"15. synchronized 与 ReentrantLock 怎么选？\\",\\"level\\":2,\\"id\\":\\"15-synchronized-与-reentrantlock-怎么选\\"},{\\"title\\":\\"16. 锁升级、锁降级和自旋各指什么？\\",\\"level\\":2,\\"id\\":\\"16-锁升级锁降级和自旋各指什么\\"},{\\"title\\":\\"17. 同一线程启动两次会怎样？Hello World 有多少线程？\\",\\"level\\":2,\\"id\\":\\"17-同一线程启动两次会怎样hello-world-有多少线程\\"},{\\"title\\":\\"18. 怎样区分死锁、锁持有者死循环和正常等待？\\",\\"level\\":2,\\"id\\":\\"18-怎样区分死锁锁持有者死循环和正常等待\\"},{\\"title\\":\\"19. 等人到齐、限制并发和发布快照分别用什么？\\",\\"level\\":2,\\"id\\":\\"19-等人到齐限制并发和发布快照分别用什么\\"},{\\"title\\":\\"20. 怎样用栈实现一个有界阻塞 FIFO 队列？\\",\\"level\\":2,\\"id\\":\\"20-怎样用栈实现一个有界阻塞-fifo-队列\\"},{\\"title\\":\\"21. 线程池为什么排队，单线程池会建几个线程？\\",\\"level\\":2,\\"id\\":\\"21-线程池为什么排队单线程池会建几个线程\\"},{\\"title\\":\\"22. CAS 何时能代替一把锁？AQS 的 waitStatus 在记什么？\\",\\"level\\":2,\\"id\\":\\"22-cas-何时能代替一把锁aqs-的-waitstatus-在记什么\\"},{\\"title\\":\\"23. 同名类为什么仍然不能相互转换？\\",\\"level\\":2,\\"id\\":\\"23-同名类为什么仍然不能相互转换\\"},{\\"title\\":\\"24. 动态生成类，怎样让关闭的计时功能没有逐次开销？\\",\\"level\\":2,\\"id\\":\\"24-动态生成类怎样让关闭的计时功能没有逐次开销\\"},{\\"title\\":\\"25. 堆还有空间，分配大数组为什么仍然失败？\\",\\"level\\":2,\\"id\\":\\"25-堆还有空间分配大数组为什么仍然失败\\"},{\\"title\\":\\"26. 堆很稳，进程内存一直涨，下一步看什么？\\",\\"level\\":2,\\"id\\":\\"26-堆很稳进程内存一直涨下一步看什么\\"},{\\"title\\":\\"27. 垃圾收集器怎么选，日志怎么留？\\",\\"level\\":2,\\"id\\":\\"27-垃圾收集器怎么选日志怎么留\\"},{\\"title\\":\\"28. 怎样从一次 Full GC 找到可验证的原因？\\",\\"level\\":2,\\"id\\":\\"28-怎样从一次-full-gc-找到可验证的原因\\"},{\\"title\\":\\"29. volatile 发布的数据，另一个线程到底能看到什么？\\",\\"level\\":2,\\"id\\":\\"29-volatile-发布的数据另一个线程到底能看到什么\\"},{\\"title\\":\\"30. 容器配了 1 GiB，为什么不能给 Java 1 GiB 堆？\\",\\"level\\":2,\\"id\\":\\"30-容器配了-1-gib为什么不能给-java-1-gib-堆\\"},{\\"title\\":\\"31. 数据为什么会被当作指令？传输途中又该信谁？\\",\\"level\\":2,\\"id\\":\\"31-数据为什么会被当作指令传输途中又该信谁\\"},{\\"title\\":\\"32. 上传功能怎样避免“小请求、大消耗”？\\",\\"level\\":2,\\"id\\":\\"32-上传功能怎样避免小请求大消耗\\"},{\\"title\\":\\"33. 服务变慢，先抓线程栈还是先看请求？\\",\\"level\\":2,\\"id\\":\\"33-服务变慢先抓线程栈还是先看请求\\"},{\\"title\\":\\"34. Lambda 慢了几十倍，这个实验比较的是什么？\\",\\"level\\":2,\\"id\\":\\"34-lambda-慢了几十倍这个实验比较的是什么\\"},{\\"title\\":\\"35. 如何判断 final 有没有让某段代码更快？\\",\\"level\\":2,\\"id\\":\\"35-如何判断-final-有没有让某段代码更快\\"},{\\"title\\":\\"36. 两个人同时扣库存，事务隔离能解决哪一部分？\\",\\"level\\":2,\\"id\\":\\"36-两个人同时扣库存事务隔离能解决哪一部分\\"},{\\"title\\":\\"37. Spring Bean 什么时候能用？事务从哪里开始？\\",\\"level\\":2,\\"id\\":\\"37-spring-bean-什么时候能用事务从哪里开始\\"},{\\"title\\":\\"38. Netty 的 EventLoop 到底管几条连接？\\",\\"level\\":2,\\"id\\":\\"38-netty-的-eventloop-到底管几条连接\\"},{\\"title\\":\\"39. 分布式 ID 如何在唯一性、顺序和吞吐之间取舍？\\",\\"level\\":2,\\"id\\":\\"39-分布式-id-如何在唯一性顺序和吞吐之间取舍\\"}],\\"standaloneTitle\\":\\"\\"}"},"headers":[],"relativePath":"articles/java-core-knowledge.md","filePath":"articles/java-core-knowledge.md"}'),s={name:"articles/java-core-knowledge.md"},i=Object.assign(s,{setup(r){const c=`<p>同一段 Java 代码，换一个线程池、垃圾收集器或事务边界，运行结果可能截然不同。下面从语言和集合入手，依次讨论并发、虚拟机、现场诊断和服务端框架。代码以 Java 17 的语法和 API 为基准，诊断命令以 HotSpot 为例。</p>
<table>
<thead>
<tr>
<th>想弄清的问题</th>
<th>阅读范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>对象为什么还活着？集合该怎么选？</td>
<td>01–10，语言、引用与集合</td>
</tr>
<tr>
<td>数据怎么读写？接口和模式怎么选？</td>
<td>11–14，I/O 与设计</td>
</tr>
<tr>
<td>线程为什么等？任务为什么堆积？</td>
<td>15–22，锁、队列与执行器</td>
</tr>
<tr>
<td>类从哪来？内存花在哪？</td>
<td>23–30，类加载、GC 与容器</td>
</tr>
<tr>
<td>服务为什么不安全或变慢？</td>
<td>31–35，边界检查、观测与实验</td>
</tr>
<tr>
<td>数据库、框架和多节点之间有什么约束？</td>
<td>36–39，事务、网络与标识</td>
</tr>
</tbody>
</table>
<h2 id="01-同一个-class-文件为什么能在不同机器上运行"><span id="同一个-class-文件为什么能在不同机器上运行" aria-hidden="true"></span>01. 同一个 class 文件为什么能在不同机器上运行？</h2>
<p><code>javac</code> 把源码编译成带版本号的字节码。目标机器的 JVM 加载、校验并执行它，标准库提供文件、线程和网络等运行能力。JDK 还带编译器和诊断工具。跨平台有条件：目标 JVM 得认识 class 版本，用到的 API 得存在，JNI 动态库还得匹配操作系统和 CPU。</p>
<p><strong>怎样用一个例子说明 Java 平台？</strong> 把下面保存为 <code>Platform.java</code>，在装有 JDK 17 或更高版本的目录中执行后面的命令。</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Platform</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-type">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Integer</span> <span class="hljs-variable">copies</span> <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
        System.out.println(<span class="hljs-string">&quot;copies=&quot;</span> + copies);
    }
}
</code></pre>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 生成可在 Java 17 运行的字节码，并限制可使用的标准库 API</span>
javac --release 17 Platform.java
<span class="hljs-comment"># 查看装箱、字符串拼接和方法调用对应的字节码</span>
javap -c Platform
<span class="hljs-comment"># 执行入口，预期输出 copies=3</span>
java Platform
</code></pre>
<p>HotSpot 可以先解释执行，在得到调用频率、接收者类型等信息后把热点编译为机器码。短命令看启动时间，常驻服务看预热后的吞吐和尾延迟。提前编译把部分工作移到构建期，有利于冷启动，也会改变反射配置和部署产物。单凭“编译”两个字判断快慢容易选错指标。</p>
<h2 id="02-哪些异常应该在当前层处理"><span id="哪些异常应该在当前层处理" aria-hidden="true"></span>02. 哪些异常应该在当前层处理？</h2>
<p><code>Throwable</code> 分成 <code>Exception</code> 和 <code>Error</code>。受检异常需要捕获或在方法签名声明；<code>RuntimeException</code>、<code>Error</code> 及其子类没有这项编译约束。读取文件失败可能有备用路径；传入非法下标应修调用者；遇到 <code>OutOfMemoryError</code> 后，业务线程通常没有足够条件安全重试。</p>
<p>反射按名字找不到目标常见 <code>ClassNotFoundException</code>；已编译的依赖在链接或后续使用时无法得到，还可能报 <code>NoClassDefFoundError</code>。后者也可能出现在类初始化先前失败之后，要找时间上最早的异常。</p>
<p><strong>日志为什么只剩线程池栈？</strong> 异步任务在提交后才失败。请求入口生成关联 ID，提交时显式传递，执行端用它记录操作名和原始 cause。在 Reactive Streams 中用 <code>onError</code> 传递终止信号，在有恢复策略的位置返回替代流；在 <code>CompletableFuture</code> 中用 <code>whenComplete</code> 观察、<code>handle</code> 转换结果。重试有副作用的操作前核对幂等性。同步边界用 try-with-resources 关闭资源；包装异常保留 cause；捕获中断后向上传递，或恢复中断标记并退出任务。</p>
<h2 id="03-final-能锁住什么资源由谁关闭"><span id="final-能锁住什么资源由谁关闭" aria-hidden="true"></span>03. final 能锁住什么？资源由谁关闭？</h2>
<p><code>final</code> 变量只能赋值一次，方法不能被覆盖，类不能被继承。<code>final List&lt;String&gt; names</code> 仍能追加元素。向别人暴露只读视图时，原列表的修改仍可能可见；要保存当时的元素序列用 <code>List.copyOf(names)</code>，元素可变时还需复制元素。构造不可变对象时避免构造函数泄露 <code>this</code>。</p>
<p><code>finally</code> 通常在离开 try 时执行，里面的 return 或 throw 会覆盖原返回或异常；进程被强制终止时不能依赖它。<code>finalize()</code> 依赖 GC 调度，可能滞后、对象还可能复活，自 JDK 18 起标记为待移除。<code>System.runFinalization()</code> 无法给资源回收设定期限。</p>
<p><strong>Cleaner 也可能来不及，怎么设计？</strong> 文件或数据库游标交给实现 <code>AutoCloseable</code> 的所有者，用 try-with-resources 确定释放时点。包装 native 句柄时可用 Cleaner 兜底，清理状态独立于宿主对象，显式关闭与兜底共享幂等释放逻辑。若清理动作捕获宿主引用，宿主一直可达，兜底本身就失效了。</p>
<h2 id="04-缓存注册表和本地句柄分别需要哪种引用"><span id="缓存注册表和本地句柄分别需要哪种引用" aria-hidden="true"></span>04. 缓存、注册表和本地句柄分别需要哪种引用？</h2>
<table>
<thead>
<tr>
<th>引用</th>
<th>判断依据</th>
<th>用在哪儿，哪里容易出错</th>
</tr>
</thead>
<tbody>
<tr>
<td>强引用</td>
<td>从 GC Roots 有强引用路径，目标存活</td>
<td>活跃请求持有订单；静态 Map 无上限也会一直保留订单</td>
</tr>
<tr>
<td>软引用</td>
<td>可由收集器按内存需求清除</td>
<td>可重算的数据；要保证容量和命中率，用有界缓存与淘汰策略</td>
</tr>
<tr>
<td>弱引用</td>
<td>只剩弱可达路径时，GC 可清除</td>
<td>弱键注册表；若 value 强引用 key，弱键仍无法回收</td>
</tr>
<tr>
<td>幻象引用</td>
<td><code>get()</code> 总是 null，可通过队列接收通知</td>
<td>跟踪 native 资源的后续清理；需保留引用对象本身并消费队列</td>
</tr>
</tbody>
</table>
<p><strong>为什么弱引用缓存偶尔空指针？</strong> 先把一次 <code>ref.get()</code> 的结果放到局部强引用，再判断和使用。连续两次 get，中间可能发生回收。队列通知也没有时限。软引用保留时长受实现和压力影响，调整 HotSpot 策略无法代替业务 TTL。JNI 操作只传递句柄而宿主可能提前失去可达性时，可在操作末尾的 finally 中调用 <code>Reference.reachabilityFence(owner)</code>。</p>
<h2 id="05-拼接字符串和读写字节分别怎么选"><span id="拼接字符串和读写字节分别怎么选" aria-hidden="true"></span>05. 拼接字符串和读写字节分别怎么选？</h2>
<p>少量字段组成一句话用 <code>+</code>。编译器可折叠常量，现代 javac 对非常量拼接通常生成 invokedynamic；可以用第 01 节的 javap 看实际结果。循环追加上千行用局部 <code>StringBuilder</code>，已知大致字符数可预设容量。共享 <code>StringBuffer</code> 只同步单个方法，多步检查再追加仍需协调，通常让每个任务单独构建更省事。</p>
<p>String 不可变，可安全作 Map 的键。intern 适合重复量较大且值域受控的字符串，随意把用户输入全放进池会增加查找和内存成本。早期 HotSpot 的永久代压力和现代堆的表现不同。JDK 9 起紧凑字符串可用一个字节存放 Latin-1 字符，不能由此推断所有字符都占一个字节。</p>
<p><strong>中文写入后读成乱码怎么查？</strong> 先确定文件或协议约定，再在两个方向使用同一个字符集：</p>
<pre><code class="hljs language-java"><span class="hljs-type">byte</span>[] <span class="hljs-variable">wire</span> <span class="hljs-operator">=</span> <span class="hljs-string">&quot;订单&quot;</span>.getBytes(java.nio.charset.StandardCharsets.UTF_8);
<span class="hljs-type">String</span> <span class="hljs-variable">order</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">String</span>(wire, java.nio.charset.StandardCharsets.UTF_8);
</code></pre>
<p>收到历史 GBK 文件，就在读取端按已知的 GBK 解码，再以 UTF-8 保存。JDK 18 起默认字符集通常是 UTF-8，历史文件的编码不会随 JDK 升级自动改变。</p>
<h2 id="06-什么时候值得用动态代理"><span id="什么时候值得用动态代理" aria-hidden="true"></span>06. 什么时候值得用动态代理？</h2>
<p>反射允许检查方法、字段和构造器。JDK 动态代理进一步在运行时生成实现指定接口的类，把调用交给 InvocationHandler。比如给订单查询加计时，调用者持有查询接口，处理器记录起止时间并转发给目标。反射调用目标抛出的异常会包在 InvocationTargetException 中，转发时要保留原始原因。</p>
<table>
<thead>
<tr>
<th>场景</th>
<th>选择</th>
<th>限制</th>
</tr>
</thead>
<tbody>
<tr>
<td>两三个方法要加计时</td>
<td>显式装饰器</td>
<td>编译期就能检查签名，新增接口方法时同步修改</td>
</tr>
<tr>
<td>多个接口统一鉴权</td>
<td>JDK Proxy</td>
<td>调用者须走代理接口，处理好 equals、hashCode 和异常语义</td>
</tr>
<tr>
<td>调用方依赖具体类</td>
<td>子类代理</td>
<td>final 类不能继承，final/private 方法不能靠覆盖拦截</td>
</tr>
</tbody>
</table>
<p>在代理模式的 Spring 应用里，从目标对象内部直接调用自身方法会绕过代理。反射读取其他模块的非公开成员还受模块开放范围限制；定位 <code>InaccessibleObjectException</code> 时先检查是否有公开 API，或由目标模块精确 <code>opens</code> 给需要的模块。</p>
<h2 id="07-integer-的值身份和大小为什么是三回事"><span id="integer-的值身份和大小为什么是三回事" aria-hidden="true"></span>07. Integer 的值、身份和大小为什么是三回事？</h2>
<p>int 是 32 位有符号值，Integer 是可为 null 的对象引用。自动装箱由编译器生成 <code>Integer.valueOf</code>，拆箱生成 <code>intValue</code>，空值在拆箱点抛 NPE。小常量装箱至少在 −128 到 127 范围内有身份保证；比较数值用 equals，允许 null 用 <code>Objects.equals</code>。扩大实现的整数缓存通常不如直接用 int 数组消除整批对象。</p>
<p><strong>一个 Integer 到底占多少字节？</strong> <code>Integer.BYTES</code> 是数值的四个字节。对象布局还含对象头、字段和对齐填充，数组另有长度信息。用 OpenJDK JOL 在目标 JVM 检查布局，或由 Java agent 用 <code>Instrumentation.getObjectSize(obj)</code> 取近似浅大小。想知道移除缓存可释放多少内存，要看堆转储中的支配关系和 retained size，不能把浅大小当答案。32/64 位 JVM 不改变 int 的位宽，会改变引用或头部布局；JNI 库需匹配架构。即使一次 int 读写是原子的，<code>i++</code> 仍包含读、算、写三步。<a href="https://github.com/openjdk/jol">OpenJDK JOL</a></p>
<h2 id="08-顺序列表双端队列和优先队列怎样选择"><span id="顺序列表双端队列和优先队列怎样选择" aria-hidden="true"></span>08. 顺序列表、双端队列和优先队列怎样选择？</h2>
<p>ArrayList 随机访问快，尾部追加摊还 O(1)，中部插入要移动后续元素。LinkedList 已持有迭代器位置时可低成本插删，按下标找位置仍要遍历，还要为节点和指针付费。普通栈、队列优先考虑 ArrayDeque。Vector 同步单个操作，多步逻辑仍要自己保护。遍历同步包装的列表时要在同一包装器上持锁；fail-fast 异常仅用于尽早发现误用。</p>
<p><strong>VIP 任务怎样先执行，又保留同级先来先服务？</strong> 给任务分配优先级和递增序号，用比较器先比优先级，再比序号。PriorityQueue 底层是堆，入队和取队首 O(log n)，遍历不能得到全排序。多线程用 PriorityBlockingQueue，它默认无容量上限；入口还需要配额。若普通用户也有时限，用两个 FIFO 队列按权重轮询，或提高等待过久任务的优先级并重新入队。</p>
<p><code>List.of(a,b)</code> 是不可修改的小集合工厂；固定参数重载可以省掉可变参数数组。排序已有列表可用 <code>list.sort(comparator)</code>；单纯取下一个最高优先级任务，维护堆即可。</p>
<h2 id="09-hashmap-为什么扩容又为什么有时会树化"><span id="hashmap-为什么扩容又为什么有时会树化" aria-hidden="true"></span>09. HashMap 为什么扩容，又为什么有时会树化？</h2>
<p>HashMap 通过键的 hashCode 混合高低位后定位桶，用 equals 区分同桶的键。键参与哈希的属性在入表后发生变化，后续按新值可能找不回旧记录。容量过小导致重复扩容；预估一万项、负载因子 0.75，初始容量按至少约 13334 估算，由实现取合适的容量。稀疏的大表也会增加遍历成本。</p>
<p><strong>不同键落到同一个位置怎么办？</strong> 链地址法让多个条目共享一个桶；开放寻址法继续探测空槽，删除常需墓碑或重排。JDK 8 HashMap 的长桶在容量足够大时可以转为红黑树，小表通常优先扩容。Hashtable 同步单方法且拒绝 null；HashMap 允许 null；TreeMap 按比较器排序并支持范围查找，比较结果为零会视作同一键。需要按最近访问顺序淘汰，可用 access-order LinkedHashMap，实现容量限制时还要考虑并发保护。</p>
<h2 id="10-concurrenthashmap-能保证哪些操作一起完成"><span id="concurrenthashmap-能保证哪些操作一起完成" aria-hidden="true"></span>10. ConcurrentHashMap 能保证哪些操作一起完成？</h2>
<p><code>get</code> 加 <code>put</code> 是两个操作。两个线程同时判断某词不存在，再各自写入 1，会少计一次。下面把每个键的计数器初始化交给 Map，热点增量交给 LongAdder：</p>
<pre><code class="hljs language-java"><span class="hljs-type">var</span> <span class="hljs-variable">counts</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">java</span>.util.concurrent.ConcurrentHashMap&lt;String, java.util.concurrent.atomic.LongAdder&gt;();
counts.computeIfAbsent(<span class="hljs-string">&quot;timeout&quot;</span>, key -&gt; <span class="hljs-keyword">new</span> <span class="hljs-title class_">java</span>.util.concurrent.atomic.LongAdder()).increment();
</code></pre>
<p>这适合只增加指标、不会同时删除计数器的场景。需要精确地“减到零并删除”时可把状态变更集中在同一键的 compute；需要跨键转账时要另建事务边界。映射函数应短小，避免在内部请求网络。</p>
<p><strong>为什么写不同键还能并行？</strong> JDK 7 用 Segment 分段；JDK 8 起的实现可用 CAS 安装空桶首节点，对竞争桶局部同步并协助扩容。无须为每次读写竞争一个全表锁。计数分散在多个槽，更新期间 <code>size()</code>、<code>mappingCount()</code> 和遍历都不能提供整表同一时刻的快照。把这些数当监控值可以，用来扣最后一个库存会错。</p>
<h2 id="11-一个线程怎样照看许多连接"><span id="一个线程怎样照看许多连接" aria-hidden="true"></span>11. 一个线程怎样照看许多连接？</h2>
<p>阻塞流适合顺序读写。非阻塞 SocketChannel 配合 Selector，可以由一个线程等待多个连接就绪。异步通道则通过 Future 或完成处理器交付一次操作的结果。三者最容易混淆的地方在于：收到“可读”后，应用仍需亲自 read，一次 read 也可能只有半条消息。</p>
<p>以“4 字节长度 + 正文”的协议为例，连接注册前调用 <code>configureBlocking(false)</code>，每次 select 后移除已处理的 selected key。读到 0 就保留半包，等下次事件；读到 −1 表示对端结束输入。凑满 4 字节后校验长度上限，正文也凑满才交给业务。ByteBuffer 写入后 flip 切到读模式，解析结束后 compact 保留未消费字节。直接 clear 会丢掉半包的位置。</p>
<p><strong>连接不多，为什么 CPU 仍然很高？</strong> 检查是否无数据可写时仍订阅 OP_WRITE，或在 read 返回 0 后原地重试。只在存在积压输出时关注写就绪。若就绪延迟高而 CPU 不高，检查事件线程有没有执行 JDBC、DNS 或磁盘阻塞调用。把慢任务交给有界执行器，保留每连接的消息顺序。普通文件通道无法像套接字一样注册到 Selector。</p>
<h2 id="12-文件复制零拷贝和分散读有什么区别"><span id="文件复制零拷贝和分散读有什么区别" aria-hidden="true"></span>12. 文件复制、零拷贝和分散读有什么区别？</h2>
<p>复制普通文件优先用 <code>Files.copy(source, target)</code>，根据需求明确覆盖策略和是否复制属性。流式解压、摘要或加密需要逐块读取；只把文件内容传给另一个通道时，可测 <code>FileChannel.transferTo</code>。操作系统可能减少内核与用户空间之间的数据复制；文件系统、目标通道、TLS 和文件大小都会影响收益。一次传输可能只完成部分甚至返回 0，须累计偏移，零进展时切换缓冲复制或等目标就绪。</p>
<p><strong>一条消息要分开放进头、体两个缓冲区怎么办？</strong> 已知两个缓冲区的大小时，SocketChannel 的 <code>read(new ByteBuffer[]{header, body})</code> 按顺序填充，称为 scattering read。若正文长度由头声明，先填满头、校验长度，再分配正文。反方向的 gathering write 用一组缓冲区写出，要按各自 position 续写。直接缓冲区的分配释放也有成本，重复使用并用 BufferPoolMXBean 观察容量。比较复制方式时分别测冷缓存和热缓存；要求落盘的场景还要统一同步写语义。</p>
<h2 id="13-什么时候提取接口什么时候保留抽象类"><span id="什么时候提取接口什么时候保留抽象类" aria-hidden="true"></span>13. 什么时候提取接口，什么时候保留抽象类？</h2>
<p>多个实现只需要共享行为契约时用接口。例如配送报价器只有 <code>quote(order)</code>，自提和快递可以独立实现。需要共享构造约束、实例状态或固定执行骨架时用抽象类。接口允许 default 方法为既有契约增加默认行为；同名默认实现冲突时，由实现类显式选择。仅返回值不同的两个方法不能在 Java 源码里构成重载，子类覆盖则允许协变返回类型。</p>
<p><strong>增加配送方式总要改同一个大 switch，怎么拆？</strong> 把费率计算提为报价策略，在组装阶段把方式映射到实现，未知方式显式报错。给每种策略共用一套契约测试，如金额非负、币种一致。若实际只有两个固定分支且长期稳定，保留清楚的 switch 更易读。开闭原则针对反复发生的变化；拆成十个还得一起修改的接口并没有降低改动成本。</p>
<h2 id="14-单例工厂代理和外观各处理什么变化"><span id="单例工厂代理和外观各处理什么变化" aria-hidden="true"></span>14. 单例、工厂、代理和外观各处理什么变化？</h2>
<p>进程内的无状态配置对象可用枚举单例 <code>enum Defaults { INSTANCE }</code>；想延迟创建且需要普通类 API，可用私有构造器和静态内部类持有实例。双重检查锁定还要求实例字段为 volatile。单例范围受类加载器影响，不能据此实现跨实例集群唯一。Spring 的 singleton 默认指每个容器中每个 bean 定义一份。</p>
<table>
<thead>
<tr>
<th>想做的事</th>
<th>适合的模式</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td>按配置选择具体客户端</td>
<td>工厂</td>
<td>创建本地文件或对象存储客户端</td>
</tr>
<tr>
<td>给读操作叠加缓冲</td>
<td>装饰器</td>
<td>BufferedInputStream 包装底层流</td>
</tr>
<tr>
<td>在调用边界统一开始事务</td>
<td>代理</td>
<td>转发到业务对象前先获取事务</td>
</tr>
<tr>
<td>让调用方用一次操作完成多个步骤</td>
<td>外观（Facade）</td>
<td>结算接口组合计价、预留库存、生成账单</td>
</tr>
</tbody>
</table>
<p><strong>结算外观里第三步失败怎么办？</strong> 先确定步骤是否共享一个本地事务；跨服务时需要标记进度、幂等重试或撤销预留。Facade 简化调用契约，本身不会赋予多次远程调用原子性。</p>
<h2 id="15-synchronized-与-reentrantlock-怎么选"><span id="synchronized-与-reentrantlock-怎么选" aria-hidden="true"></span>15. synchronized 与 ReentrantLock 怎么选？</h2>
<p>临界区短且只有一种等待条件，synchronized 最直接，退出块时自动释放。ReentrantLock 适用于限时争锁、可中断争锁、多个条件队列或有明确公平性需求的场景。二者都可重入，同一线程可以在持锁方法里再次取得同一把锁。吞吐取决于竞争、持锁时间和 JDK 版本。</p>
<p><strong>写一个有界缓冲区，该叫醒谁？</strong> 生产者在满时等 notFull，消费者在空时等 notEmpty；两者由同一锁创建。生产者入队后 signal 一个等待 notEmpty 的消费者。等待必须用 while 再检查，因为唤醒不代表仍满足条件。下面是消费端骨架，queue 和条件变量由所有参与线程共享：</p>
<pre><code class="hljs language-java">lock.lockInterruptibly();
<span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">while</span> (queue.isEmpty()) {
        notEmpty.await();
    }
    <span class="hljs-type">var</span> <span class="hljs-variable">item</span> <span class="hljs-operator">=</span> queue.removeFirst();
    notFull.signal();
    <span class="hljs-keyword">return</span> item;
} <span class="hljs-keyword">finally</span> {
    lock.unlock();
}
</code></pre>
<p>限时操作用 tryLock(timeout, unit)，只在确实获得锁后释放。公平锁倾向照顾队列里的等待者，也可能降低吞吐；无参 tryLock 仍可插队。</p>
<h2 id="16-锁升级锁降级和自旋各指什么"><span id="锁升级锁降级和自旋各指什么" aria-hidden="true"></span>16. 锁升级、锁降级和自旋各指什么？</h2>
<p>同步块的字节码可见 monitorenter/monitorexit，同步方法靠方法标志。HotSpot 如何快速进入、竞争时是否自旋、何时膨胀成监视器，是实现细节。旧版偏向锁用对象头记录偏向线程，出现其他线程争用时可能撤销偏向，进入轻量路径或膨胀。JDK 15 起默认关闭偏向锁。排查现代应用应查看相应版本的实现和争用事件，不能从一张旧版对象头图推断所有现场。</p>
<p><strong>读多写少，能否从写锁切成读锁？</strong> ReentrantReadWriteLock 的写锁持有者可先取得读锁，再释放写锁，从而在继续读取时保住刚更新的状态。读者直接等待升级成写锁可能把自己堵住；释放读锁后再取写锁，必须重新检查条件。这里的“降级”是程序显式选择锁模式。</p>
<p><strong>自旋等多久才值得？</strong> 若另一个核上的持有者很快释放，自旋能省线程挂起与调度；持锁线程被抢占、机器 CPU 配额很低或临界区包含 I/O，自旋只会消耗 CPU。先缩短临界区，再考虑锁策略。</p>
<h2 id="17-同一线程启动两次会怎样hello-world-有多少线程"><span id="同一线程启动两次会怎样hello-world-有多少线程" aria-hidden="true"></span>17. 同一线程启动两次会怎样？Hello World 有多少线程？</h2>
<p>Thread 只能从 NEW 经一次 start 进入调度；即使第一次已经结束，再 start 仍抛 IllegalThreadStateException。直接调用 run 是当前线程的普通方法调用。需要重复工作，用同一个 Runnable 提交多个任务，或分别创建新线程。</p>
<table>
<thead>
<tr>
<th>观测状态</th>
<th>常见现场</th>
</tr>
</thead>
<tbody>
<tr>
<td>RUNNABLE</td>
<td>正在运行、等待 CPU，也可能在某些 native I/O 调用中</td>
</tr>
<tr>
<td>BLOCKED</td>
<td>等待进入内置监视器</td>
</tr>
<tr>
<td>WAITING / TIMED_WAITING</td>
<td>join、wait、park 或 sleep；需结合栈与锁对象解释</td>
</tr>
<tr>
<td>TERMINATED</td>
<td>run 已退出，线程实例不能重新启动</td>
</tr>
</tbody>
</table>
<p><strong>怎么数？</strong> 在 main 中打印 <code>ManagementFactory.getThreadMXBean().getThreadCount()</code>，让程序短暂停留，再从相同用户的另一个终端观察。这个 API 统计存活的平台线程，包括守护线程；操作系统还会看到 GC、编译器等 JVM 内部线程。JDK、收集器、工具连接时点都会改变读数，无法由一行 println 算出固定总数。</p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 找到目标 Java 进程，记录 PID</span>
jcmd -l
<span class="hljs-comment"># 将 1234 换成目标 PID，对照 Java 栈和 JVM 内部线程</span>
jcmd 1234 Thread.<span class="hljs-built_in">print</span>
</code></pre>
<h2 id="18-怎样区分死锁锁持有者死循环和正常等待"><span id="怎样区分死锁锁持有者死循环和正常等待" aria-hidden="true"></span>18. 怎样区分死锁、锁持有者死循环和正常等待？</h2>
<p>死锁需要资源互斥、持有并等待、不可抢占和循环等待。转账时线程甲先锁 A 再要 B，线程乙先锁 B 再要 A，两个栈互指就构成证据。启动线程的先后不能保证它们获得 CPU 或锁的先后。</p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># Linux 上按线程看 CPU，记下持续占用 CPU 的十进制 TID</span>
top -H -p 1234
<span class="hljs-comment"># 把示例 TID 转为十六进制，对应 HotSpot 平台线程栈中的 nid</span>
<span class="hljs-built_in">printf</span> <span class="hljs-string">&#x27;%x\\n&#x27;</span> 1250
<span class="hljs-comment"># 打印锁持有者和等待者，间隔几秒重复取样</span>
jcmd 1234 Thread.<span class="hljs-built_in">print</span> -l
</code></pre>
<p>若多个快照里持有者一直 RUNNABLE，CPU 高且停在同一个循环，而等待者都指向它，优先查循环退出条件。检测锁环可调用 <code>ThreadMXBean.findDeadlockedThreads()</code>，作用域是本 JVM 支持检测的平台线程锁；线程池所有工作线程都等同一池里的子任务，也可能卡死却没有监视器环。修复转账用稳定的账户 ID 锁序；能拆开持锁和远程 I/O 就拆开；限时取锁要释放已拿到的锁并限制重试。</p>
<h2 id="19-等人到齐限制并发和发布快照分别用什么"><span id="等人到齐限制并发和发布快照分别用什么" aria-hidden="true"></span>19. 等人到齐、限制并发和发布快照分别用什么？</h2>
<table>
<thead>
<tr>
<th>工具</th>
<th>使用条件</th>
<th>失败时要处理什么</th>
</tr>
</thead>
<tbody>
<tr>
<td>CountDownLatch</td>
<td>一个协调者等固定数量任务完成，一次性</td>
<td>每个任务 finally 中 countDown；另行收集失败，等待设期限</td>
</tr>
<tr>
<td>CyclicBarrier</td>
<td>固定数量参与者每一轮都要会合</td>
<td>一个参与者退出可能使其他人超时或屏障破裂</td>
</tr>
<tr>
<td>Phaser</td>
<td>多阶段且参与者动态加入、退出</td>
<td>退出时注销，避免所有人永久等待</td>
</tr>
<tr>
<td>Semaphore</td>
<td>下游只允许有限个同时请求</td>
<td>获得许可后才释放；单独处理超时、限流</td>
</tr>
<tr>
<td>CopyOnWriteArrayList</td>
<td>通知监听器等读多写少的快照</td>
<td>写入复制数组；旧迭代器看不到新注册项</td>
</tr>
<tr>
<td>ConcurrentSkipListMap</td>
<td>多线程下按键范围、顺序查询</td>
<td>遍历弱一致；业务不能假设全局快照</td>
</tr>
</tbody>
</table>
<p><strong>多个分片加载后才提供查询，怎么落地？</strong> 以分片数建立 latch，工作线程分别加载到临时状态。协调者 await 成功且所有分片成功后一次发布新索引；超时或任一失败就保留旧索引。如果还要拿每个结果，用 CompletableFuture 聚合结果更自然。下一次刷新另建 latch。</p>
<h2 id="20-怎样用栈实现一个有界阻塞-fifo-队列"><span id="怎样用栈实现一个有界阻塞-fifo-队列" aria-hidden="true"></span>20. 怎样用栈实现一个有界阻塞 FIFO 队列？</h2>
<p>ConcurrentLinkedQueue 用非阻塞算法维护链式 FIFO，拿不到元素时 poll 返回 null。LinkedBlockingQueue 可指定容量，put/take 支持阻塞；省略容量相当于允许极大的积压。ArrayBlockingQueue 用固定数组，内存较可预测。SynchronousQueue 容量为零，每次交接都需要一个对手方。</p>
<p><strong>若底层只能用栈，直接 push/pop 会倒序。</strong> 准备输入栈和输出栈，共用一把锁和第 15 节的两个条件。put 等待总元素数小于容量，再压入输入栈。take 等待非空；若输出栈为空，将输入栈逐个弹出压入输出栈，再从输出栈弹出队首。必须等输出栈耗尽才再次倒栈，否则新到元素会越过旧元素。</p>
<p>例如先放 A、B，第一次倒栈后取走 A，此时放 C，下一次先取输出栈中的 B，最后才倒出 C。每个元素至多搬一次，均摊 O(1)。若业务明确需要后进先出，直接使用有界 LinkedBlockingDeque 的 putFirst/takeFirst。</p>
<h2 id="21-线程池为什么排队单线程池会建几个线程"><span id="线程池为什么排队单线程池会建几个线程" aria-hidden="true"></span>21. 线程池为什么排队，单线程池会建几个线程？</h2>
<p>ThreadPoolExecutor 接收任务时，通常先补足核心线程，再尝试入队；队列满后才扩到最大线程，仍接不下就执行拒绝策略。因此把无界队列和很大的 maximumPoolSize 配在一起，后者通常起不到扩容作用。看队列还要看字节：一千个引用上传内容的任务可能已经耗尽内存。</p>
<table>
<thead>
<tr>
<th>工厂</th>
<th>适用情况与代价</th>
</tr>
</thead>
<tbody>
<tr>
<td>newFixedThreadPool / newSingleThreadExecutor</td>
<td>固定并发或串行执行，默认任务队列可能持续增长</td>
</tr>
<tr>
<td>newCachedThreadPool</td>
<td>直接交接，阻塞任务暴增时可能创建过多线程</td>
</tr>
<tr>
<td>newScheduledThreadPool</td>
<td>延时或周期调度；周期任务抛出的未处理异常会停止后续执行</td>
</tr>
<tr>
<td>newWorkStealingPool</td>
<td>可拆分的计算任务，完成顺序没有提交顺序保证</td>
</tr>
<tr>
<td>newVirtualThreadPerTaskExecutor（21+）</td>
<td>大量等待型任务；数据库连接等稀缺资源仍需单独限制</td>
</tr>
</tbody>
</table>
<p><strong>单线程池的工厂只会被调用一次吗？</strong> 常见 OpenJDK 实现 core=max=1，默认按需创建。无任务时可为零次。用计数 ThreadFactory，每次创建时递增；先用 execute 提交一个抛出未捕获异常的任务，再提交正常任务，原工作线程退出后会补建。对照 submit：异常通常保存在 Future 中，需 get 才观察到。shutdown 后处理已接收任务；shutdownNow 尝试中断并返回尚未启动的任务，业务仍要响应中断。线程池复用平台线程，按请求保存的 ThreadLocal 应在 finally 中 remove。</p>
<p>下面的程序只改变任务的异常交付方式。保存为 <code>WorkerProbe.java</code>，分别运行两次：</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.concurrent.*;
<span class="hljs-keyword">import</span> java.util.concurrent.atomic.AtomicInteger;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">WorkerProbe</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-type">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> <span class="hljs-keyword">throws</span> Exception {
        <span class="hljs-type">var</span> <span class="hljs-variable">created</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">AtomicInteger</span>();
        <span class="hljs-type">var</span> <span class="hljs-variable">pool</span> <span class="hljs-operator">=</span> Executors.newSingleThreadExecutor(task -&gt; {
            <span class="hljs-type">var</span> <span class="hljs-variable">t</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Thread</span>(task, <span class="hljs-string">&quot;worker-&quot;</span> + created.incrementAndGet());
            t.setUncaughtExceptionHandler((thread, error) -&gt;
                    System.out.println(thread.getName() + <span class="hljs-string">&quot; exited&quot;</span>));
            <span class="hljs-keyword">return</span> t;
        });
        <span class="hljs-keyword">try</span> {
            <span class="hljs-type">Runnable</span> <span class="hljs-variable">fail</span> <span class="hljs-operator">=</span> () -&gt; { <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IllegalStateException</span>(<span class="hljs-string">&quot;sample&quot;</span>); };
            <span class="hljs-keyword">if</span> (<span class="hljs-string">&quot;submit&quot;</span>.equals(args[<span class="hljs-number">0</span>])) {
                <span class="hljs-keyword">try</span> {
                    pool.submit(fail).get();
                } <span class="hljs-keyword">catch</span> (ExecutionException expected) {
                    System.out.println(expected.getCause().getMessage());
                }
            } <span class="hljs-keyword">else</span> {
                pool.execute(fail);
            }
            System.out.println(pool.submit(() -&gt; Thread.currentThread().getName()).get());
            System.out.println(<span class="hljs-string">&quot;created=&quot;</span> + created.get());
        } <span class="hljs-keyword">finally</span> {
            pool.shutdown();
        }
    }
}
</code></pre>
<pre><code class="hljs language-bash"><span class="hljs-comment"># execute 模式，下一项工作由 worker-2 执行，created=2</span>
java WorkerProbe.java execute
<span class="hljs-comment"># submit 模式，从 Future 得到异常，下一项仍由 worker-1 执行，created=1</span>
java WorkerProbe.java submit
</code></pre>
<h2 id="22-cas-何时能代替一把锁aqs-的-waitstatus-在记什么"><span id="cas-何时能代替一把锁aqs-的-waitstatus-在记什么" aria-hidden="true"></span>22. CAS 何时能代替一把锁？AQS 的 waitStatus 在记什么？</h2>
<p>CAS 只在当前位置仍等于预期值时更新。AtomicInteger 的 incrementAndGet 由 JVM 支持的原子读改写实现，具体指令依架构而异。给索引分区抢占修改权，可在分区对象上用 AtomicBoolean.compareAndSet(false,true)，失败就返回忙或按策略等待，成功者在 finally 释放。若修改权需要跨进程，这个字段的作用域就不够。只统计总次数且写入很密集，可选 LongAdder；要“余额足够才减”用 CAS 重读、重算并重试。重试函数内部不能附带发消息等副作用。</p>
<p><strong>相同的旧值为什么还会误判？</strong> 若值从 A 到 B 又回到 A，比较当前值无法发现它改过。需要识别这段历史时，用带版本的不可变状态或 AtomicStampedReference。要在已有对象字段上操作，可选 VarHandle 或相应的字段更新器。</p>
<p><strong>读 JDK 8 源码时，区分锁的 state 和等待节点的 waitStatus。</strong> 前者可表示重入次数或剩余许可。后者用 SIGNAL（−1）表示后继需要被唤醒，CANCELLED（1）标记取消，CONDITION（−2）表示在条件队列中，PROPAGATE（−3）用于共享模式传播，0 为普通初态。await 释放锁并进入条件队列，signal 后节点转到同步队列，仍需重新竞争才能从 await 返回。新版实现已调整字段和状态值，对照源码请选同一版本。<a href="https://github.com/openjdk/jdk8u/blob/master/jdk/src/share/classes/java/util/concurrent/locks/AbstractQueuedSynchronizer.java">OpenJDK 8 AQS 源码</a></p>
<h2 id="23-同名类为什么仍然不能相互转换"><span id="同名类为什么仍然不能相互转换" aria-hidden="true"></span>23. 同名类为什么仍然不能相互转换？</h2>
<p>类的身份由二进制类名和定义它的类加载器共同决定。典型加载器先询问父加载器，再自行 findClass。Java 9 之后常见层次是 bootstrap、platform、application；老版本讲义里的扩展加载器不能直接套到模块化 JDK。插件若各自加载了一份公共接口，即使包名相同，跨插件强转也可能失败。把公共 API 放到共同父加载器，插件只隔离各自的实现。</p>
<p><strong>从 class 到可用对象经历什么？</strong> 加载取得类定义；链接校验字节码、为静态字段准备存储，并按需解析符号引用；初始化按顺序执行静态初始化逻辑。普通静态字段先有默认值；编译期常量可能内联到使用方，改了库里的常量而没有重编调用方，程序仍可能打印旧值。主动使用类才触发相应初始化，读取内联常量未必触发。</p>
<p><strong>Jar Hell 怎么查？</strong> 编译能过，启动后报 NoSuchMethodError，要查运行时到底选中了哪个 jar。在 Maven 项目看依赖树，再与实际启动类路径和打包结果核对。冲突版本统一到兼容组合；确实无法统一才用独立加载器或包重定位。启动慢且主要在加载类时，可评估 CDS/AppCDS，用相同应用和 JDK 对照冷启动。</p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 在 Maven 项目根目录查看传递依赖及被冲突淘汰的版本</span>
mvn dependency:tree -Dverbose
<span class="hljs-comment"># 在测试环境启动并记录实际加载来源，JDK 9+</span>
java -Xlog:class+load=info -jar app.jar
</code></pre>
<h2 id="24-动态生成类怎样让关闭的计时功能没有逐次开销"><span id="动态生成类怎样让关闭的计时功能没有逐次开销" aria-hidden="true"></span>24. 动态生成类，怎样让关闭的计时功能没有逐次开销？</h2>
<p>有源码时可调用 JDK 的 JavaCompiler，在进程内编译后通过专用加载器定义类。只有接口时用 JDK Proxy；需要为已有方法织入行为时，Java agent 的 ClassFileTransformer 可在类定义前转换字节码，或在支持的范围内重转换。用 ASM 直接生成类时要生成合法的方法描述符、字节码和栈帧；定义成功不代表能绕过访问控制。动态类应限制数量与加载器生命周期，以免元空间持续增长。</p>
<p><strong>统计网络调用耗时，关闭后连 if 检查都不想付。</strong> 启动时决定是否安装 transformer；关闭时加载原始类，调用路径没有计时器读取和条件分支。开启时只织入选定方法，在正常与异常出口都记录耗时。若要求在线切换，需保存原始字节码并验证是否支持 retransformation；已在执行的方法栈帧可能继续跑旧逻辑。“关闭时没有每次调用的探针开销”与“在线切换本身没有成本”是两种要求。只需粗略热点信息时可改用采样，省去逐方法织入。</p>
<h2 id="25-堆还有空间分配大数组为什么仍然失败"><span id="堆还有空间分配大数组为什么仍然失败" aria-hidden="true"></span>25. 堆还有空间，分配大数组为什么仍然失败？</h2>
<p>先记录完整异常文本和分配类型。<code>new byte[n]</code> 的 n 是字节元素数；<code>new long[n]</code> 的载荷约是它的八倍，两者还需数组头和对齐。分配表达式看起来很小，也可能在复制、扩容时同时持有新旧两份数组。</p>
<table>
<thead>
<tr>
<th>现场</th>
<th>优先核对</th>
</tr>
</thead>
<tbody>
<tr>
<td>Java heap space</td>
<td>实际堆上限、GC 后存活集、临时分配峰值、收集器</td>
</tr>
<tr>
<td>Requested array size exceeds VM limit</td>
<td>数组元素数量和 VM 长度限制；加大堆不必然有效</td>
</tr>
<tr>
<td>Metaspace</td>
<td>类加载器数量、动态生成类、卸载和显式上限</td>
</tr>
<tr>
<td>Direct buffer memory 或直接缓冲预留失败</td>
<td>直接缓冲区的容量、池化和生命周期</td>
</tr>
<tr>
<td>unable to create native thread</td>
<td>线程数、栈大小、进程或容器 PID 限额与可用本地内存</td>
</tr>
<tr>
<td>StackOverflowError</td>
<td>深递归或调用链耗尽当前线程栈</td>
</tr>
</tbody>
</table>
<p><strong>100 MiB 数组报错，日志却有更多空闲。</strong> 先确认日志对应同一进程、同一时刻，以及数字究竟是堆内空闲、已预留虚拟地址还是容器余量。G1 的大对象需要连续 region；多个分散空洞的总量足够也可能分配失败。检查大对象与分配失败前后的 GC 事件，再决定分块、减少并发复制或调整内存预算。进程被内核 OOM kill 时可能连 Java 异常都没有。</p>
<p>JVM 规范区分线程私有的程序计数器、栈帧，以及共享堆、方法区等。HotSpot 元空间承载类元数据，直接缓冲、线程栈和代码缓存也占进程内存。逃逸分析可通过标量替换消掉对象分配，不能由源码中的 new 逐个推断堆上对象数。</p>
<h2 id="26-堆很稳进程内存一直涨下一步看什么"><span id="堆很稳进程内存一直涨下一步看什么" aria-hidden="true"></span>26. 堆很稳，进程内存一直涨，下一步看什么？</h2>
<p>先把同一时间轴上的三组量分开：堆的 used/committed/max、进程 RSS、容器记账。reserved 是保留地址空间，committed 是 JVM 已承诺可用的部分，RSS 是当前驻留页；不能把几个数字直接相减当成“泄漏量”。经典分代收集器有 Eden、Survivor 和老年代，G1 以 region 承担不同角色，布局随收集器改变。线程的 TLAB 是堆里的分配缓冲，不属于 native 线程栈。</p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 在可控制的重启窗口启用 NMT，统计 HotSpot 跟踪的本地内存</span>
java -XX:NativeMemoryTracking=summary -jar app.jar
<span class="hljs-comment"># 稳定后建立比较基线，1234 换成目标 PID</span>
jcmd 1234 VM.native_memory baseline
<span class="hljs-comment"># 在同样负载或内存上涨后查看各类相对基线的变化</span>
jcmd 1234 VM.native_memory summary.diff
</code></pre>
<p><strong>怎么将这些数值接进监控？</strong> MemoryMXBean 取堆使用，MemoryPoolMXBean 分池，BufferPoolMXBean 看 direct/mapped 的计数和容量，ThreadMXBean 看平台线程，GarbageCollectorMXBean 取收集次数与时间。进程 RSS 和 cgroup 另从操作系统采集。若 NMT、缓冲池都平稳而 RSS 涨，再看 native 库、自行 mmap 的文件与分配器保留页。短任务若主要开销来自 JVM 辅助线程，可对照 Serial GC、复用常驻进程或缩小线程池；用相同 CPU 配额比冷启动、峰值 RSS 和吞吐。</p>
<h2 id="27-垃圾收集器怎么选日志怎么留"><span id="垃圾收集器怎么选日志怎么留" aria-hidden="true"></span>27. 垃圾收集器怎么选，日志怎么留？</h2>
<p>活对象可从根集合沿引用链找到，互相引用的孤立对象可以整体回收。复制便于快速分配，需要腾挪空间；标记清除可能留下碎片；整理通过移动活对象集中空闲空间。传统年轻代收集时，存活对象可能在 Survivor 区之间复制或晋升老年代。并发标记仍需处理用户线程继续写引用的问题，也仍有暂停阶段。</p>
<table>
<thead>
<tr>
<th>HotSpot 收集器</th>
<th>适合先做什么对照</th>
</tr>
</thead>
<tbody>
<tr>
<td>Serial</td>
<td>堆小、CPU 少，关注启动和内存占用</td>
</tr>
<tr>
<td>Parallel</td>
<td>允许较长暂停的批处理，关注总完成时间</td>
</tr>
<tr>
<td>G1</td>
<td>服务端混合负载，比较暂停分位数和吞吐</td>
</tr>
<tr>
<td>ZGC / Shenandoah</td>
<td>对尾延迟敏感且有 CPU、内存余量；先确认发行版支持</td>
</tr>
<tr>
<td>CMS</td>
<td>旧环境迁移排查；HotSpot JDK 14 已移除</td>
</tr>
</tbody>
</table>
<p><strong>日志既能定位暂停，又不能写满盘，怎么配？</strong></p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># JDK 9+，带时间、运行时长和标签，保留轮转日志</span>
java <span class="hljs-string">&#x27;-Xlog:gc*,safepoint:file=gc.log:time,uptime,level,tags:filecount=5,filesize=20M&#x27;</span> -jar app.jar
<span class="hljs-comment"># JDK 8 HotSpot，用旧式 GC 参数，在单次诊断窗口写文件</span>
java -XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:gc-jdk8.log -jar app.jar
</code></pre>
<p>保留 JVM 启动参数、JDK 版本和相同时间段的业务请求量，才能判断一段暂停的业务影响。<a href="https://docs.oracle.com/en/java/javase/17/migrate/removed-tools-and-components.html">Oracle JDK 17 迁移指南</a></p>
<h2 id="28-怎样从一次-full-gc-找到可验证的原因"><span id="怎样从一次-full-gc-找到可验证的原因" aria-hidden="true"></span>28. 怎样从一次 Full GC 找到可验证的原因？</h2>
<ol>
<li>用 GC ID、时间和 cause 定位暂停。先辨别显式请求、分配或疏散失败、元数据压力；普通 young 或 mixed 暂停不等于 Full GC。</li>
<li>看回收前后和多个周期的最低水位。如果底线持续上升，查堆里的保留链；底线稳定但分配速率突然翻倍，查大数组、流量突增或缓存批量刷新。</li>
<li>G1 若报告 evacuation failure，核对并发标记是否追不上分配、是否有足够空 region、大对象是否挤占空间。Mixed 暂停长，再分辨是扫描跨区引用、复制活对象还是工作线程缺 CPU。region 越小管理粒度越细，同时增加记账和跨区跟踪成本。</li>
<li>选择一次可回退的调整：缩小一次批次、给存活集留出疏散空间、提早启动标记，或在 CPU 配额允许时调整收集策略。比较相同负载下的 p99、总 CPU、吞吐和 GC 后水位。缩短单次暂停可能会增加收集频率。</li>
</ol>
<p><strong>怎样取旁证？</strong> JFR 可关联分配热点和暂停原因；类加载器增长时结合类卸载日志。堆直方图或 heap dump 能解释“谁还持有对象”，但获取过程可能停顿且需要磁盘空间。先用已有日志缩小范围，再决定是否在受控窗口采集。<a href="https://docs.oracle.com/en/java/javase/22/gctuning/garbage-first-g1-garbage-collector1.html">G1 大对象与回收</a></p>
<h2 id="29-volatile-发布的数据另一个线程到底能看到什么"><span id="volatile-发布的数据另一个线程到底能看到什么" aria-hidden="true"></span>29. volatile 发布的数据，另一个线程到底能看到什么？</h2>
<p>生产者先写普通字段 payload=42，再写 volatile 标志 ready=true；消费者读到这个 true 后读 payload。在没有后续写入的一次发布中，结果必须为 42。根据程序顺序、同一 volatile 的写读关系和传递性，可以把两次普通访问连接起来。单纯 sleep、打印时间戳或“我先启动的”都不能建立这条关系。实现可能使用屏障或特定指令，具体指令依 CPU 而异。</p>
<p><img src="../assets/development/java/volatile-publication.png" alt="两个线程通过 ready 发布 payload，消费者读到 true 后可见 42" loading="lazy"></p>
<p><strong>怎么检验所有结果？</strong> 先从 JMM 推导允许与禁止结果，再用 jcstress 让两个 actor 并发运行，按结果分类。对这个例子，消费者没见发布时允许未就绪；见到 true 且读到 0 属禁止结果。去掉 volatile 后，原先的证明就不成立。压测能提供反例，反复没观测到某个结果无法证明它被规范禁止。发布持续变化的整组配置，可用 volatile 引用一次替换不可变快照；涉及多字段读改写可改用同一把锁。<a href="https://docs.oracle.com/javase/specs/jls/se17/html/jls-17.html">Java 内存模型</a> · <a href="https://github.com/openjdk/jcstress">OpenJDK jcstress</a></p>
<p>下面的实验只发布一次。保存为 <code>Publication.java</code>，可把变量名与图上的四个步骤逐个对应。</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Publication</span> {
    <span class="hljs-keyword">static</span> <span class="hljs-type">int</span> payload;
    <span class="hljs-keyword">static</span> <span class="hljs-keyword">volatile</span> <span class="hljs-type">boolean</span> ready;

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-type">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> <span class="hljs-keyword">throws</span> InterruptedException {
        <span class="hljs-type">Thread</span> <span class="hljs-variable">reader</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Thread</span>(() -&gt; {
            <span class="hljs-keyword">while</span> (!ready) {
                Thread.onSpinWait();
            }
            System.out.println(payload);
        });
        reader.start();
        payload = <span class="hljs-number">42</span>;
        ready = <span class="hljs-literal">true</span>;
        reader.join();
    }
}
</code></pre>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 直接运行单文件示例，消费者看到 ready 后打印 42</span>
java Publication.java
</code></pre>
<p>这里的自旋只用来观察内存语义。若生产者可能长时间不发布，实际任务可用 CountDownLatch 或阻塞队列，让消费者在等待期间释放 CPU。</p>
<h2 id="30-容器配了-1-gib为什么不能给-java-1-gib-堆"><span id="容器配了-1-gib为什么不能给-java-1-gib-堆" aria-hidden="true"></span>30. 容器配了 1 GiB，为什么不能给 Java 1 GiB 堆？</h2>
<p>cgroup 限制整个容器的资源。堆之外还有元空间、栈、代码缓存、直接缓冲和 native 库。即使堆没到 Xmx，其他部分也可能让进程触顶。CPU 配额还会影响 GC、编译器和公共线程池，过多工作线程在限额下互抢会拉高延迟。</p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 在目标容器里查看当前 HotSpot 识别的系统指标和 cgroup provider</span>
java -XshowSettings:system -version
<span class="hljs-comment"># cgroup v2，在挂载对应当前容器时查看上限、当前用量和 OOM 事件</span>
<span class="hljs-built_in">cat</span> /sys/fs/cgroup/memory.max /sys/fs/cgroup/memory.current /sys/fs/cgroup/memory.events
<span class="hljs-comment"># 看 CPU 配额与是否受到节流</span>
<span class="hljs-built_in">cat</span> /sys/fs/cgroup/cpu.max /sys/fs/cgroup/cpu.stat
</code></pre>
<p>旧 JDK 或发行版补丁对 cgroup v1/v2 的支持不同，先核对更新版本和实际识别结果。暂不能升级时，用实测堆外峰值给 Xmx 留余量，并限制应用线程池；受支持的版本可用 ActiveProcessorCount 修正 CPU 估计。退出码 137 只说明进程收到 SIGKILL，还要查 OOMKilled、内核或容器事件。</p>
<p><strong>微服务冷启动怎样改善？</strong> 拆出拉依赖、加载类、建连接和首次编译耗时，分别比较连接复用、CDS、精简运行时、预热实例。jlink 可减小分发体积，未必能缩短业务初始化；能接受构建和反射约束时，再对照 native image。看从启动到首个成功请求的时间，同时看预热后的峰值吞吐。</p>
<h2 id="31-数据为什么会被当作指令传输途中又该信谁"><span id="数据为什么会被当作指令传输途中又该信谁" aria-hidden="true"></span>31. 数据为什么会被当作指令？传输途中又该信谁？</h2>
<p>SQL、模板、HTML、目录表达式都有各自的语法。把外部数据拼进语法结构，接收方就可能按另一层意思解析它。以订单查询为例，JDBC 先固定 SQL，再绑定值：</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">var</span> <span class="hljs-variable">q</span> <span class="hljs-operator">=</span> connection.prepareStatement(<span class="hljs-string">&quot;select total from orders where id = ?&quot;</span>)) {
    q.setLong(<span class="hljs-number">1</span>, orderId);
    <span class="hljs-keyword">try</span> (<span class="hljs-type">var</span> <span class="hljs-variable">rows</span> <span class="hljs-operator">=</span> q.executeQuery()) {
        <span class="hljs-keyword">if</span> (rows.next()) {
            <span class="hljs-keyword">return</span> rows.getBigDecimal(<span class="hljs-number">1</span>);
        }
    }
}
</code></pre>
<p>排序列名不能用值占位符替代，按业务枚举映射为限定的列名。HTML 输出按文本、属性等具体上下文编码。启动外部程序时固定可执行文件和允许的选项，分别传递参数。数据库凭据按职责授予最小权限，降低出错影响。旧文章中的 SecurityManager 已不适合作为隔离方案，JDK 24 已将其永久禁用。<a href="https://docs.oracle.com/en/java/javase/24/security/security-manager-is-permanently-disabled.html">Oracle 对 Security Manager 的说明</a></p>
<p><strong>连接明明走 HTTPS，怎么还需要验证身份？</strong> 例如客户端把请求发给冒充服务端的中间人，对方再转发；仅加密到这个中间人无法保护业务数据。客户端须同时验证证书链和目标主机名；私有 CA 应装入受管信任库并支持轮换。服务端也要验证客户端身份时，可采用双向 TLS。遇到证书错误先查域名、有效期、系统时间和证书链。</p>
<h2 id="32-上传功能怎样避免小请求大消耗"><span id="上传功能怎样避免小请求大消耗" aria-hidden="true"></span>32. 上传功能怎样避免“小请求、大消耗”？</h2>
<p>假设预览服务用两个 int 记录已解压字节数和本轮长度。<code>used + next &lt;= limit</code> 在两者非负时也可能因 int 溢出误放行。先校验非负，将操作数提升为 long 后再相加，或用 Math.addExact 把溢出显式转成拒绝。限制压缩包入口大小还不够，需要在流式解压过程中限制实际输出、文件数、单文件大小和耗时，并确保输出路径在指定目录内。</p>
<p><strong>旧服务只能读 Java 序列化数据怎么办？</strong> 优先迁移为有明确模式和大小限制的数据格式。在过渡期使用 ObjectInputFilter 限定允许的类、深度、引用数、数组大小，再验证字段不变量。transient 仅影响默认序列化，不能替代输出字段审查。向外部返回错误码和关联 ID，把脱敏后的原因保留在受限日志里。为超限、取消和失败路径测试临时文件、连接和线程是否回收；静态扫描、依赖检查和针对边界值的测试各能捕捉不同问题。</p>
<h2 id="33-服务变慢先抓线程栈还是先看请求"><span id="服务变慢先抓线程栈还是先看请求" aria-hidden="true"></span>33. 服务变慢，先抓线程栈还是先看请求？</h2>
<p>先圈定时间、接口、实例和受影响的分位数。若 p50 几乎不动而 p99 激增，找慢请求的分段耗时；若整批实例同时变慢，先对齐发布、流量和公共依赖。一次请求耗时包含排队、运行和等待，CPU 火焰图只能解释其中一部分。</p>
<table>
<thead>
<tr>
<th>现场</th>
<th>下一份证据</th>
<th>如何判读</th>
</tr>
</thead>
<tbody>
<tr>
<td>CPU 高、吞吐停滞</td>
<td>按线程 CPU + 多次栈快照，或 CPU 采样</td>
<td>热点是否集中在同一段计算或重试</td>
</tr>
<tr>
<td>CPU 低、线程池满</td>
<td>队列等待时间、线程栈、连接池等待</td>
<td>区分拿不到连接、慢 SQL 和下游超时</td>
</tr>
<tr>
<td>周期性尖刺</td>
<td>GC、safepoint、容器节流时间线</td>
<td>暂停是否和慢请求时间重合</td>
</tr>
<tr>
<td>只在一台机器慢</td>
<td>I/O 等待、内存换页、同机负载</td>
<td>与同版本健康实例对照</td>
</tr>
</tbody>
</table>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 在目标进程记录 60 秒 JFR，输出路径由目标 JVM 解析并需可写</span>
jcmd 1234 JFR.start name=slow settings=profile duration=60s filename=slow.jfr
<span class="hljs-comment"># 录制完成后概览实际记录的事件和数量</span>
jfr summary slow.jfr
</code></pre>
<p><strong>采样和插桩能回答什么？</strong> CPU 采样适合找占 CPU 的热点，罕见或很短的调用可能抽不到；墙钟采样包含等待。插桩能准确计选定方法的次数、耗时，但每次调用付费，易扰动热点。JFR 的锁等待、分配采样和 GC 等事件可与两者互补。先用低开销信号确定范围，再为少量方法增加细节。</p>
<h2 id="34-lambda-慢了几十倍这个实验比较的是什么"><span id="lambda-慢了几十倍这个实验比较的是什么" aria-hidden="true"></span>34. Lambda 慢了几十倍，这个实验比较的是什么？</h2>
<p>对同一批整数求最大值，<code>int[]</code> 上的循环、<code>List&lt;Integer&gt;</code> 上的循环、Stream&lt;Integer&gt;.reduce 和 IntStream.max 同时改变了存储、装箱、遍历和调用方式。先把输入固定为同一份 int 数组，再比较循环与 IntStream；下一轮单独引入装箱。确认空输入行为一致，预先生成非恒定数据，返回计算结果防止死代码被消除。</p>
<p>微基准用 JMH 分开预热和测量，使用独立 fork，多种输入规模，同时报告分配率与误差区间。不要在被测方法里生成数据或打印，也不要从一次冷启动纳秒计时外推生产吞吐。对小函数，类型分布、内联、是否捕获上下文都可能改变结果。<a href="https://github.com/openjdk/jmh/tree/master/jmh-samples/src/main/java/org/openjdk/jmh/samples">OpenJDK JMH 示例</a></p>
<p><strong>容量规划怎么从实验走到机器数？</strong> 设峰值 600 请求/秒，平均响应时间 0.2 秒，稳态平均在途请求约 120 个；这是并发请求数，不能直接当作 CPU 核数。按真实读写比例和数据量阶梯加压，记录满足 p99 和错误率目标时的单实例持续吞吐。若每实例实测 180 请求/秒，正常至少 4 台；要求故障 1 台后仍承载 600，则至少 5 台。最后检查数据库、限流、共享缓存能否承受总负载，并做突发与长稳测试。</p>
<h2 id="35-如何判断-final-有没有让某段代码更快"><span id="如何判断-final-有没有让某段代码更快" aria-hidden="true"></span>35. 如何判断 final 有没有让某段代码更快？</h2>
<p>HotSpot 根据运行时类型和调用频率做内联、去虚拟化、逃逸分析、标量替换及循环优化。即使方法未标 final，单一接收者调用也可能被内联；后续加载新类型可能使假设失效，触发去优化。长时间运行的循环也可在执行中通过 OSR 切换到优化代码。编译预算、分层策略和计数衰减等因素使“调用固定次数就一定编译”不可靠。</p>
<pre><code class="hljs language-bash"><span class="hljs-comment"># 在单独的实验进程打印编译与内联决策，重定向保存输出</span>
java -XX:+UnlockDiagnosticVMOptions -XX:+PrintCompilation -XX:+PrintInlining Platform &gt; jit.txt
<span class="hljs-comment"># 在运行中的 HotSpot 查看代码缓存使用</span>
jcmd 1234 Compiler.codecache
</code></pre>
<p><strong>设计一个能被推翻的实验。</strong> 只改变目标方法是否 final，方法体、调用点、输入和接收者分布保持一致，用 JMH 分 fork 测量，并检查两组实际内联日志。如果两组都内联且耗时区间重叠，证据支持“本调用点未测到收益”。另做单态与多态对照；不要用常量 final 字段对比运行时取值字段，这测到的可能只是常量折叠。final 的继承约束和字段发布语义即使没有速度差也成立。</p>
<h2 id="36-两个人同时扣库存事务隔离能解决哪一部分"><span id="两个人同时扣库存事务隔离能解决哪一部分" aria-hidden="true"></span>36. 两个人同时扣库存，事务隔离能解决哪一部分？</h2>
<p>以下以 InnoDB 为前提。READ UNCOMMITTED 可读到未提交修改；READ COMMITTED 中普通一致性读每条语句建立新视图；REPEATABLE READ 中同一事务的普通一致性读通常沿用第一次快照，一定条件下范围锁定读会使用 next-key lock；SERIALIZABLE 增加读写之间的约束和等待。普通快照读、锁定读和 UPDATE 的行为要分别推理。<a href="https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html">InnoDB 隔离级别</a></p>
<p><strong>同一 SKU 只剩一件，怎么保证不超卖？</strong></p>
<pre><code class="hljs language-sql"><span class="hljs-comment">-- 单条语句检查并扣减；sku 有唯一索引，应用检查受影响行数</span>
<span class="hljs-keyword">UPDATE</span> stock <span class="hljs-keyword">SET</span> available <span class="hljs-operator">=</span> available <span class="hljs-operator">-</span> <span class="hljs-number">1</span> <span class="hljs-keyword">WHERE</span> sku <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;A17&#x27;</span> <span class="hljs-keyword">AND</span> available <span class="hljs-operator">&gt;=</span> <span class="hljs-number">1</span>;
</code></pre>
<p>受影响 1 行表示扣减成功；0 行表示商品不存在或库存不足。若还要验证先前读到的整份报价，就加 version 条件并递增版本；冲突后重新读取并按业务规则决定是否重试。此类乐观并发控制在执行 UPDATE 时仍会取得数据库锁。多步强竞争操作也可在同一短事务里先 SELECT … FOR UPDATE，再算价格、扣减、提交；按稳定顺序加锁并处理死锁重试。跨库或外部支付要单独设计幂等和补偿。</p>
<p><strong>MyBatis 从 Mapper 到 JDBC 经过什么？</strong> Mapper 接口代理通过 SqlSession 找到 MappedStatement。执行层由 Executor 协调查询、更新、事务和缓存；StatementHandler 准备语句，ParameterHandler 绑定值，ResultSetHandler 映射结果。底层的配置解析、数据源、类型处理器和日志为这些步骤服务。查“SQL 对但写错类型”，先看绑定参数和 TypeHandler；查“为什么又执行一次”，再看会话边界和缓存。<a href="https://mybatis.org/mybatis-3/java-api.html">MyBatis Java API</a></p>
<h2 id="37-spring-bean-什么时候能用事务从哪里开始"><span id="spring-bean-什么时候能用事务从哪里开始" aria-hidden="true"></span>37. Spring Bean 什么时候能用？事务从哪里开始？</h2>
<p>常规单例先实例化并注入依赖，处理 Aware 回调；初始化前后会经过 BeanPostProcessor。常见初始化顺序为 @PostConstruct、afterPropertiesSet、自定义 init 方法，初始化后可返回代理。容器关闭时管理单例销毁回调。prototype 每次请求可产生新实例，交付后的销毁由使用者负责；request/session 取决于 Web 请求或会话。把 prototype 直接注入单例，只会在单例创建时解析一次，需每次获取可用 ObjectProvider。</p>
<p><strong>为什么给方法标 @Transactional，有些调用仍不回滚？</strong> 默认代理模式下，外部调用先到代理，切点匹配后事务拦截器读取传播属性，请事务管理器开启或加入事务，然后调用目标。正常返回通常提交，异常按回滚规则处理；默认 RuntimeException 和 Error 触发回滚，受检异常可用 rollbackFor 显式指定。已有事务中传播和 rollback-only 标记也会影响最终结果。目标内部 this 调用绕过代理；吞掉异常并正常返回也会改变拦截器所见结果。可拆到独立 bean 经过代理，或用 TransactionTemplate 明确包住工作段。<a href="https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html">Spring 声明式事务</a></p>
<p><img src="../assets/development/java/transaction-proxy.png" alt="扣减库存时外部调用经 Spring 事务代理，执行后按结果提交或回滚" loading="lazy"></p>
<h2 id="38-netty-的-eventloop-到底管几条连接"><span id="netty-的-eventloop-到底管几条连接" aria-hidden="true"></span>38. Netty 的 EventLoop 到底管几条连接？</h2>
<p>典型 Netty 4.1 NIO 服务由 boss group 接受连接，worker group 将已接入的 Channel 注册到 EventLoop。一个 EventLoop 通常管理多条连接，一个已注册的 Channel 通常由一个 EventLoop 负责 I/O。入站数据经 pipeline 解帧、解码、处理；出站写入经相应出站 handler 编码。ChannelFuture 用于观察异步操作完成，事件线程里等待自己的 future 可能阻塞整个循环。<a href="https://netty.io/4.1/api/io/netty/channel/EventLoop.html">Netty EventLoop API</a></p>
<p><strong>为什么有连接读写很慢，明明机器还有空闲核？</strong> 如果其中一个 handler 同步查库 200 ms，同一 EventLoop 上的其他连接都可能等它。将阻塞工作送入有界业务执行器，返回时保证每连接所需的顺序，并观察写缓冲水位与 Channel.isWritable()。下游积压时限制读取或拒绝新工作，仅加 EventLoop 数量可能把积压移到数据库。</p>
<p>池化 ByteBuf 降低频繁分配，slice 或组合缓冲区可减少复制；跨异步边界保留引用时要明确谁 retain、谁 release。已交给下一 handler 的消息不能再由当前 handler 随意释放。用同协议、TLS、消息大小和并发测试才有可比性；Netty 的另一个实际收益是复用经过检验的协议编解码、半包和背压处理。</p>
<h2 id="39-分布式-id-如何在唯一性顺序和吞吐之间取舍"><span id="分布式-id-如何在唯一性顺序和吞吐之间取舍" aria-hidden="true"></span>39. 分布式 ID 如何在唯一性、顺序和吞吐之间取舍？</h2>
<table>
<thead>
<tr>
<th>方案</th>
<th>容易得到什么</th>
<th>需要承担什么</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据库自增</td>
<td>简单、单写点内好管理</td>
<td>依赖写点；分配顺序与事务提交顺序不同</td>
</tr>
<tr>
<td>数据库号段</td>
<td>一次取一段，本机批量发号</td>
<td>实例重启可能跳号，需原子领取且不可重复发放</td>
</tr>
<tr>
<td>UUID</td>
<td>多节点独立生成；随机型不必分配机器号</td>
<td>关注长度、索引局部性；随机型不提供时间顺序</td>
</tr>
<tr>
<td>Snowflake 类方案</td>
<td>64 位、近似按时间排序</td>
<td>机器号唯一、时钟回拨和每毫秒序列上限都要处理</td>
</tr>
</tbody>
</table>
<p>典型位布局用 41 位毫秒差、10 位节点号、12 位序列，一节点每毫秒最多 4096 个不同序列值。夏令时结束改变本地时间显示，epoch 毫秒不因此倒退；NTP 校时、虚拟机恢复却可能让墙钟回退。检测到回退时可暂停并等到安全时间，或停止发号并告警。用逻辑时间推进时还要持久化高水位，避免重启或机器号重新分配后重复。</p>
<p><strong>一毫秒内确实要发 5000 个 ID 怎么办？</strong> 允许排队就先发 4096 个，其余等下一毫秒；不能等就增加独立且互异的节点号，或改用预领号段。重新划位可扩序列位，但会减少节点数或时间寿命，升级前还需保证两种布局不会撞号。即使 ID 看起来有序，也无法证明跨节点事件的因果关系：记录因果顺序可传递逻辑时钟；需要严格全局分配顺序则要承担协调代价。</p>
`;return(u,l)=>(a(),t("div",null,[e(n,{doc:JSON.parse(u.$frontmatter.kb).doc,content:c,base:"../"},null,8,["doc"])]))}});export{d as __pageData,i as default};
