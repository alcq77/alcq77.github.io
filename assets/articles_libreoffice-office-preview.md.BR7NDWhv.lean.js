import{_ as a}from"./chunks/ArticlePage.BzJfrCud.js";import{o as n,c as u,m as l}from"./chunks/framework.CZZR5ESy.js";const i=JSON.parse('{"title":"LibreOffice 实现 DOC、XLS、PPT 在线预览","titleTemplate":":title · 知行笔记","description":"旧版 Word、Excel、PowerPoint 文件无法直接交给浏览器统一展示时，可以在服务端使用 LibreOffice 转成 PDF，再由前端的 PDF 阅读器展示。本文使用通用文件服务举例，覆盖安装、单文件转换、Java 接入、异步","frontmatter":{"title":"LibreOffice 实现 DOC、XLS、PPT 在线预览","titleTemplate":":title · 知行笔记","description":"旧版 Word、Excel、PowerPoint 文件无法直接交给浏览器统一展示时，可以在服务端使用 LibreOffice 转成 PDF，再由前端的 PDF 阅读器展示。本文使用通用文件服务举例，覆盖安装、单文件转换、Java 接入、异步","kb":"{\\"kind\\":\\"article\\",\\"doc\\":{\\"id\\":\\"libreoffice-office-preview\\",\\"title\\":\\"LibreOffice 实现 DOC、XLS、PPT 在线预览\\",\\"category\\":\\"文档处理\\",\\"tags\\":[\\"libreoffice\\",\\"jodconverter\\",\\"doc\\",\\"xls\\",\\"ppt\\",\\"pdf\\",\\"java\\",\\"preview\\",\\"文档转换\\",\\"在线预览\\"],\\"readingMinutes\\":28},\\"toc\\":[{\\"title\\":\\"1. 先确定预览方式\\",\\"level\\":2,\\"id\\":\\"1-先确定预览方式\\"},{\\"title\\":\\"2. 安装工具、字体并找到安装目录\\",\\"level\\":2,\\"id\\":\\"2-安装工具字体并找到安装目录\\"},{\\"title\\":\\"3. 先独立验证一次转换\\",\\"level\\":2,\\"id\\":\\"3-先独立验证一次转换\\"},{\\"title\\":\\"4. Java 接入：先跑通一个独立示例\\",\\"level\\":2,\\"id\\":\\"4-java-接入先跑通一个独立示例\\"},{\\"title\\":\\"4.1 Maven 配置\\",\\"level\\":3,\\"id\\":\\"41-maven-配置\\"},{\\"title\\":\\"4.2 独立转换程序\\",\\"level\\":3,\\"id\\":\\"42-独立转换程序\\"},{\\"title\\":\\"4.3 编译、运行和判断结果\\",\\"level\\":3,\\"id\\":\\"43-编译运行和判断结果\\"},{\\"title\\":\\"5. 接入服务：转换与状态查询分开\\",\\"level\\":2,\\"id\\":\\"5-接入服务转换与状态查询分开\\"},{\\"title\\":\\"5.1 前端轮询示例\\",\\"level\\":3,\\"id\\":\\"51-前端轮询示例\\"},{\\"title\\":\\"6. 缓存：PDF、状态和访问地址是三回事\\",\\"level\\":2,\\"id\\":\\"6-缓存pdf状态和访问地址是三回事\\"},{\\"title\\":\\"7. 跨域、鉴权与下载控制\\",\\"level\\":2,\\"id\\":\\"7-跨域鉴权与下载控制\\"},{\\"title\\":\\"8. 空白文档与0字节文件\\",\\"level\\":2,\\"id\\":\\"8-空白文档与0字节文件\\"},{\\"title\\":\\"9. 常见故障：先定位阶段再处理\\",\\"level\\":2,\\"id\\":\\"9-常见故障先定位阶段再处理\\"},{\\"title\\":\\"10. 发布前验证清单\\",\\"level\\":2,\\"id\\":\\"10-发布前验证清单\\"}],\\"standaloneTitle\\":\\"\\"}"},"headers":[],"relativePath":"articles/libreoffice-office-preview.md","filePath":"articles/libreoffice-office-preview.md"}'),p={name:"articles/libreoffice-office-preview.md"},d=Object.assign(p,{setup(e){const s=`<p>旧版 Word、Excel、PowerPoint 文件无法直接交给浏览器统一展示时，可以在服务端使用 LibreOffice 转成 PDF，再由前端的 PDF 阅读器展示。本文使用通用文件服务举例，覆盖安装、单文件转换、Java 接入、异步任务、缓存和常见故障。</p>
<h2 id="1-先确定预览方式">1. 先确定预览方式</h2>
<table>
<thead>
<tr>
<th>原格式</th>
<th>转换组件</th>
<th>输出</th>
<th>需要接受的限制</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>.doc</code></td>
<td>Writer</td>
<td>PDF</td>
<td>缺字体、复杂分页和嵌入对象可能影响版式</td>
</tr>
<tr>
<td><code>.xls</code></td>
<td>Calc</td>
<td>PDF</td>
<td>按打印布局分页，不是可编辑、可筛选的电子表格</td>
</tr>
<tr>
<td><code>.ppt</code></td>
<td>Impress</td>
<td>PDF</td>
<td>展示静态幻灯片，不保留动画、视频和交互</td>
</tr>
</tbody>
</table>
<p>统一链路：浏览器申请预览 → 后端检查文件权限和版本 → 下载到临时目录 → LibreOffice 转 PDF → 保存预览文件 → 浏览器读取 PDF。</p>
<p>原文件和预览文件分开保存，预览失败不覆盖原件。这里的“在线预览”是文档阅读，不是在线编辑。如果 Excel 更需要冻结表头、筛选或查看大量数据，应另选表格阅读器；不要把 PDF 分页当成表格交互。</p>
<p>LibreOffice 安装在实际执行转换的机器上。Java 服务运行在容器中时，宿主机安装 Office 并不代表容器能使用；应放进转换容器镜像，或调用独立的转换服务。纯静态网站则在构建机器上提前转换，发布生成结果，浏览器里不运行 LibreOffice。</p>
<h2 id="2-安装工具字体并找到安装目录">2. 安装工具、字体并找到安装目录</h2>
<p>运行转换的普通用户需要读取输入文件，并能写入工作目录和用户配置目录。安装软件需要相应 sudo 授权，不需要让转换服务长期以 root 运行。</p>
<details class="install-guide">
<summary>Ubuntu / Debian：安装 LibreOffice、字体和检查工具</summary>
<pre><code class="hljs language-bash"><span class="hljs-built_in">sudo</span> apt-get update <span class="hljs-comment"># 更新已配置的软件源索引</span>
<span class="hljs-built_in">sudo</span> apt-get install -y libreoffice-writer libreoffice-calc libreoffice-impress fonts-noto-cjk fonts-liberation poppler-utils fontconfig <span class="hljs-comment"># 安装三类转换组件、字体及PDF检查工具</span>
fc-match sans:lang=zh-cn <span class="hljs-comment"># 查看中文默认匹配到的字体</span>
</code></pre>
<p>例如返回一款 Noto CJK 字体，说明字体匹配可用；仍应打开生成的 PDF 检查实际显示，不能只凭命令输出判断版式完全一致。</p>
</details>
<details class="install-guide">
<summary>使用 dnf 的 RHEL 系与已有 CentOS 7 环境</summary>
<pre><code class="hljs language-bash"><span class="hljs-built_in">sudo</span> dnf install -y libreoffice-writer libreoffice-calc libreoffice-impress fontconfig poppler-utils <span class="hljs-comment"># 从当前发行版已配置的软件源安装转换组件</span>
dnf search <span class="hljs-string">&#x27;cjk&#x27;</span> <span class="hljs-comment"># 查询本发行版提供的中日韩字体包，按结果选择安装</span>
</code></pre>
<p>CentOS 7 已结束维护。维护已有机器时，先确认仓库可用和包的兼容性，不直接套用新版系统的软件包：</p>
<pre><code class="hljs language-bash"><span class="hljs-built_in">cat</span> /etc/centos-release <span class="hljs-comment"># 确认确实是CentOS 7</span>
yum info libreoffice-writer libreoffice-calc libreoffice-impress <span class="hljs-comment"># 查询现有且已获准使用的软件源中是否有兼容包</span>
<span class="hljs-built_in">sudo</span> yum install -y libreoffice-writer libreoffice-calc libreoffice-impress fontconfig poppler-utils <span class="hljs-comment"># 仅在上一步确认软件源与包可用后安装</span>
yum search <span class="hljs-string">&#x27;cjk&#x27;</span> <span class="hljs-comment"># 查询当前源中可用的中文字体包</span>
</code></pre>
<p>旧系统自带的 Office 版本可能较老，不代表适合处理不可信上传。新建转换服务优先使用仍受维护的运行环境；不要替换系统基础库来强行安装新版 Office。</p>
</details>
<p>先查版本和程序位置：</p>
<pre><code class="hljs language-bash"><span class="hljs-built_in">command</span> -v soffice <span class="hljs-comment"># 检查是否可以通过PATH找到转换程序</span>
<span class="hljs-built_in">command</span> -v libreoffice <span class="hljs-comment"># 某些发行版通过这个启动脚本提供入口</span>
soffice --version <span class="hljs-comment"># 记录实际Office版本；若只有libreoffice命令，改用它</span>
</code></pre>
<p>Java 中的 <code>officeHome</code> 是安装根目录，不是 <code>soffice</code> 文件路径。例如根目录可以是 <code>/usr/lib/libreoffice</code> 或 <code>/usr/lib64/libreoffice</code>，必须以实际安装为准：</p>
<pre><code class="hljs language-bash"><span class="hljs-built_in">ls</span> -l /usr/lib/libreoffice/program/soffice /usr/lib64/libreoffice/program/soffice 2&gt;/dev/null <span class="hljs-comment"># 检查常见安装位置，缺失项不显示</span>
</code></pre>
<p>例如存在 <code>/usr/lib64/libreoffice/program/soffice</code>，对应的 <code>officeHome</code> 才是 <code>/usr/lib64/libreoffice</code>。找不到时，通过包清单查询，不凭发行版名称硬编码：Debian 系使用 <code>dpkg -L libreoffice-core</code>，RPM 系使用 <code>rpm -ql libreoffice-core</code>。</p>
<h2 id="3-先独立验证一次转换">3. 先独立验证一次转换</h2>
<p>先排除 Java、网关、对象存储等因素。准备一份可以正常打开的 <code>sample.doc</code>，下面的路径都替换为本机实际值。命令使用 GNU <code>timeout</code> 限制一次验证的等待时间。</p>
<pre><code class="hljs language-bash">SOFFICE=/usr/lib/libreoffice/program/soffice <span class="hljs-comment"># 改成已确认的Office启动程序</span>
SOURCE=/srv/preview-input/sample.doc <span class="hljs-comment"># 改成一份真实、非空的测试文件</span>
PREVIEW_WORK=$(<span class="hljs-built_in">mktemp</span> -d /tmp/office-preview.XXXXXXXX) <span class="hljs-comment"># 创建本次独立工作目录，失败时停止</span>
<span class="hljs-built_in">printf</span> <span class="hljs-string">&#x27;%s\\n&#x27;</span> <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>&quot;</span> <span class="hljs-comment"># 记录本次目录，后续检查与清理只操作它</span>
<span class="hljs-built_in">test</span> -x <span class="hljs-string">&quot;<span class="hljs-variable">$SOFFICE</span>&quot;</span> &amp;&amp; <span class="hljs-built_in">test</span> -s <span class="hljs-string">&quot;<span class="hljs-variable">$SOURCE</span>&quot;</span> <span class="hljs-comment"># 确认可执行程序和非空源文件；失败时不要继续</span>
<span class="hljs-built_in">mkdir</span> <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>/output&quot;</span> <span class="hljs-comment"># 创建本次输出目录</span>
</code></pre>
<p>以下步骤使用上面同一终端中的变量：</p>
<pre><code class="hljs language-bash"><span class="hljs-built_in">timeout</span> --kill-after=10s 120s <span class="hljs-string">&quot;<span class="hljs-variable">$SOFFICE</span>&quot;</span> <span class="hljs-string">&quot;-env:UserInstallation=file://<span class="hljs-variable">$PREVIEW_WORK</span>/profile&quot;</span> --headless --norestore --convert-to pdf --outdir <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>/output&quot;</span> <span class="hljs-string">&quot;<span class="hljs-variable">$SOURCE</span>&quot;</span> <span class="hljs-comment"># 使用独立用户配置目录，无界面转换为PDF</span>
CONVERT_EXIT=$? <span class="hljs-comment"># 紧接上一条记录退出码，后续命令会覆盖$?</span>
<span class="hljs-built_in">printf</span> <span class="hljs-string">&#x27;exit=%s\\n&#x27;</span> <span class="hljs-string">&quot;<span class="hljs-variable">$CONVERT_EXIT</span>&quot;</span> <span class="hljs-comment"># 0表示命令正常结束；124通常表示timeout达到限制</span>
find <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>/output&quot;</span> -maxdepth 1 -<span class="hljs-built_in">type</span> f -name <span class="hljs-string">&#x27;*.pdf&#x27;</span> -<span class="hljs-built_in">ls</span> <span class="hljs-comment"># 检查本次是否真正生成了PDF</span>
</code></pre>
<p>以 <code>sample.doc</code> 为例，输出应为 <code>output/sample.pdf</code>。替换为 <code>sample.xls</code> 或 <code>sample.ppt</code> 后，可分别验证 Calc 和 Impress。不要把其他格式直接改后缀充当旧格式样本。</p>
<pre><code class="hljs language-bash"><span class="hljs-built_in">test</span> -s <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>/output/sample.pdf&quot;</span> <span class="hljs-comment"># 检查文件存在且非空</span>
<span class="hljs-built_in">head</span> -c 5 <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>/output/sample.pdf&quot;</span> <span class="hljs-comment"># 正常PDF通常以%PDF-开头；这不是完整的有效性校验</span>
pdfinfo <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>/output/sample.pdf&quot;</span> <span class="hljs-comment"># 检查PDF能否解析，以及页数、尺寸和是否加密</span>
</code></pre>
<p>示意输出：退出码为 <code>0</code>，文件存在，<code>pdfinfo</code> 显示合理页数。仍要在阅读器中检查中文、表格、分页和幻灯片内容。只看到退出码为 0 或 <code>%PDF-</code>，不能证明转换内容完整。</p>
<p><code>--headless</code> 表示无界面运行，不是安全沙箱，也不能当成禁止宏的开关。以上命令用于受信任文件的环境验证；上传文件的转换还需要后文的访问控制、宏策略和运行隔离。参数含义见 <a href="https://help.libreoffice.org/latest/en-US/text/shared/guide/start_parameters.html">LibreOffice 命令行说明</a>。</p>
<p>检查完以后只清理本次临时目录：</p>
<pre><code class="hljs language-bash"><span class="hljs-keyword">case</span> <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>&quot;</span> <span class="hljs-keyword">in</span> /tmp/office-preview.????????) <span class="hljs-built_in">rm</span> -rf -- <span class="hljs-string">&quot;<span class="hljs-variable">$PREVIEW_WORK</span>&quot;</span> ;; *) <span class="hljs-built_in">printf</span> <span class="hljs-string">&#x27;目录不符合本次临时目录规则，停止清理\\n&#x27;</span> ;; <span class="hljs-keyword">esac</span> <span class="hljs-comment"># 校验目录前缀和随机段后删除，绝不删除输入目录</span>
</code></pre>
<h2 id="4-java-接入先跑通一个独立示例">4. Java 接入：先跑通一个独立示例</h2>
<p>下面使用 JODConverter <strong>4.4.10</strong> 的 API，这是固定示例版本，不表示最新版本；不要直接混用 5.x 的依赖和类名。示例使用 JDK 17、Maven，不依赖业务框架。JODConverter 负责控制 Office 进程并提交转换，服务器仍需安装 LibreOffice。</p>
<h3 id="41-maven-配置">4.1 Maven 配置</h3>
<p>新建独立示例目录，保存以下完整 <code>pom.xml</code>：</p>
<pre><code class="hljs language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">project</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">&quot;http://maven.apache.org/POM/4.0.0&quot;</span>
         <span class="hljs-attr">xmlns:xsi</span>=<span class="hljs-string">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span>
         <span class="hljs-attr">xsi:schemaLocation</span>=<span class="hljs-string">&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">modelVersion</span>&gt;</span>4.0.0<span class="hljs-tag">&lt;/<span class="hljs-name">modelVersion</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>example.preview<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>office-preview-demo<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">version</span>&gt;</span>1.0.0<span class="hljs-tag">&lt;/<span class="hljs-name">version</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">properties</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">maven.compiler.release</span>&gt;</span>17<span class="hljs-tag">&lt;/<span class="hljs-name">maven.compiler.release</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">project.build.sourceEncoding</span>&gt;</span>UTF-8<span class="hljs-tag">&lt;/<span class="hljs-name">project.build.sourceEncoding</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">properties</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">dependencies</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dependency</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>org.jodconverter<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>jodconverter-local-lo<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">version</span>&gt;</span>4.4.10<span class="hljs-tag">&lt;/<span class="hljs-name">version</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">dependency</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">dependencies</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">build</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">plugins</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">plugin</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">groupId</span>&gt;</span>org.apache.maven.plugins<span class="hljs-tag">&lt;/<span class="hljs-name">groupId</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">artifactId</span>&gt;</span>maven-compiler-plugin<span class="hljs-tag">&lt;/<span class="hljs-name">artifactId</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">version</span>&gt;</span>3.13.0<span class="hljs-tag">&lt;/<span class="hljs-name">version</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">plugin</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">plugins</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">build</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">project</span>&gt;</span>
</code></pre>
<p><code>jodconverter-local-lo</code> 使用 LibreOffice 的 UNO 库；不要为了补依赖，再叠加一套不同版本的 UNO 库。依赖选择见 <a href="https://jodconverter.github.io/jodconverter/4.4.10/getting-started/java-library/">JODConverter 4.4.10 Java 接入说明</a>。</p>
<h3 id="42-独立转换程序">4.2 独立转换程序</h3>
<p>保存到 <code>src/main/java/example/preview/OfficeToPdf.java</code>。此程序只负责转换已获准读取的本地文件，不包含上传接口、鉴权和异步队列。</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">package</span> example.preview;

<span class="hljs-keyword">import</span> com.sun.star.document.MacroExecMode;
<span class="hljs-keyword">import</span> org.jodconverter.core.office.OfficeUtils;
<span class="hljs-keyword">import</span> org.jodconverter.local.LocalConverter;
<span class="hljs-keyword">import</span> org.jodconverter.local.office.ExistingProcessAction;
<span class="hljs-keyword">import</span> org.jodconverter.local.office.LocalOfficeManager;

<span class="hljs-keyword">import</span> java.io.InputStream;
<span class="hljs-keyword">import</span> java.nio.charset.StandardCharsets;
<span class="hljs-keyword">import</span> java.nio.file.Files;
<span class="hljs-keyword">import</span> java.nio.file.Path;
<span class="hljs-keyword">import</span> java.util.Comparator;
<span class="hljs-keyword">import</span> java.util.Locale;
<span class="hljs-keyword">import</span> java.util.Set;
<span class="hljs-keyword">import</span> java.util.stream.Stream;

<span class="hljs-comment">/** 将一份旧版Office文件转换为独立PDF。 */</span>
<span class="hljs-keyword">public</span> <span class="hljs-keyword">final</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">OfficeToPdf</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-type">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> <span class="hljs-keyword">throws</span> Exception {
        <span class="hljs-keyword">if</span> (args.length != <span class="hljs-number">3</span>) {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IllegalArgumentException</span>(<span class="hljs-string">&quot;参数：Office安装根目录 输入文件 输出PDF&quot;</span>);
        }
        <span class="hljs-type">Path</span> <span class="hljs-variable">input</span> <span class="hljs-operator">=</span> Path.of(args[<span class="hljs-number">1</span>]).toAbsolutePath().normalize();
        <span class="hljs-type">Path</span> <span class="hljs-variable">output</span> <span class="hljs-operator">=</span> Path.of(args[<span class="hljs-number">2</span>]).toAbsolutePath().normalize();
        <span class="hljs-type">String</span> <span class="hljs-variable">name</span> <span class="hljs-operator">=</span> input.getFileName().toString().toLowerCase(Locale.ROOT);
        <span class="hljs-type">int</span> <span class="hljs-variable">dot</span> <span class="hljs-operator">=</span> name.lastIndexOf(<span class="hljs-string">&#x27;.&#x27;</span>);
        <span class="hljs-type">String</span> <span class="hljs-variable">extension</span> <span class="hljs-operator">=</span> dot &lt; <span class="hljs-number">0</span> ? <span class="hljs-string">&quot;&quot;</span> : name.substring(dot + <span class="hljs-number">1</span>);
        <span class="hljs-keyword">if</span> (!Set.of(<span class="hljs-string">&quot;doc&quot;</span>, <span class="hljs-string">&quot;xls&quot;</span>, <span class="hljs-string">&quot;ppt&quot;</span>).contains(extension)) {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IllegalArgumentException</span>(<span class="hljs-string">&quot;只接受doc、xls、ppt&quot;</span>);
        }
        <span class="hljs-keyword">if</span> (!Files.isRegularFile(input) || Files.size(input) == <span class="hljs-number">0</span>
                || Files.size(input) &gt; <span class="hljs-number">50L</span> * <span class="hljs-number">1024</span> * <span class="hljs-number">1024</span>) {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IllegalArgumentException</span>(<span class="hljs-string">&quot;源文件必须存在、非空，且不超过50MB&quot;</span>);
        }
        <span class="hljs-keyword">if</span> (!output.getFileName().toString().toLowerCase(Locale.ROOT).endsWith(<span class="hljs-string">&quot;.pdf&quot;</span>)
                || Files.exists(output)) {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IllegalArgumentException</span>(<span class="hljs-string">&quot;输出必须是尚不存在的PDF文件&quot;</span>);
        }
        Files.createDirectories(output.getParent());
        <span class="hljs-type">Path</span> <span class="hljs-variable">work</span> <span class="hljs-operator">=</span> Files.createTempDirectory(<span class="hljs-string">&quot;office-preview-&quot;</span>);
        <span class="hljs-type">Path</span> <span class="hljs-variable">converted</span> <span class="hljs-operator">=</span> work.resolve(<span class="hljs-string">&quot;preview.pdf&quot;</span>);
        <span class="hljs-type">LocalOfficeManager</span> <span class="hljs-variable">manager</span> <span class="hljs-operator">=</span> <span class="hljs-literal">null</span>;
        <span class="hljs-keyword">try</span> {
            manager = LocalOfficeManager.builder()
                    .officeHome(args[<span class="hljs-number">0</span>])
                    .workingDir(work.toFile())
                    .hostName(<span class="hljs-string">&quot;127.0.0.1&quot;</span>) <span class="hljs-comment">// UNO只监听本机，不暴露到公网</span>
                    .portNumbers(<span class="hljs-number">2002</span>) <span class="hljs-comment">// 示例独占此端口，多进程部署时分别规划</span>
                    .existingProcessAction(ExistingProcessAction.FAIL)
                    .startFailFast(<span class="hljs-literal">true</span>)
                    .processTimeout(<span class="hljs-number">30_000L</span>)
                    .taskQueueTimeout(<span class="hljs-number">30_000L</span>)
                    .taskExecutionTimeout(<span class="hljs-number">120_000L</span>)
                    .maxTasksPerProcess(<span class="hljs-number">50</span>)
                    .build();
            manager.start();
            LocalConverter.builder().officeManager(manager)
                    .loadProperty(<span class="hljs-string">&quot;MacroExecutionMode&quot;</span>, MacroExecMode.NEVER_EXECUTE)
                    .build().convert(input.toFile()).to(converted.toFile()).execute();
            <span class="hljs-keyword">if</span> (!Files.isRegularFile(converted) || Files.size(converted) &lt; <span class="hljs-number">5</span>) {
                <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IllegalStateException</span>(<span class="hljs-string">&quot;未生成有效的PDF文件&quot;</span>);
            }
            <span class="hljs-keyword">try</span> (<span class="hljs-type">InputStream</span> <span class="hljs-variable">stream</span> <span class="hljs-operator">=</span> Files.newInputStream(converted)) {
                <span class="hljs-type">String</span> <span class="hljs-variable">header</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">String</span>(stream.readNBytes(<span class="hljs-number">5</span>), StandardCharsets.US_ASCII);
                <span class="hljs-keyword">if</span> (!<span class="hljs-string">&quot;%PDF-&quot;</span>.equals(header)) {
                    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IllegalStateException</span>(<span class="hljs-string">&quot;输出不是PDF&quot;</span>);
                }
            }
            Files.copy(converted, output); <span class="hljs-comment">// 不加覆盖选项，已有目标文件会导致失败</span>
            System.out.println(output);
        } <span class="hljs-keyword">finally</span> {
            OfficeUtils.stopQuietly(manager); <span class="hljs-comment">// 无论转换成功还是失败，都停止示例启动的Office</span>
            <span class="hljs-keyword">try</span> (<span class="hljs-type">Stream</span>&lt;Path&gt; <span class="hljs-variable">paths</span> <span class="hljs-operator">=</span> Files.walk(work)) {
                <span class="hljs-keyword">for</span> (Path path : paths.sorted(Comparator.reverseOrder()).toList()) {
                    Files.deleteIfExists(path); <span class="hljs-comment">// 仅清理本次创建的临时目录</span>
                }
            }
        }
    }
}
</code></pre>
<p>这是单次命令行示例，因此运行完会停止 Office。接入长期运行的服务后，应由服务生命周期统一启动、复用和关闭一个进程管理器，不要每个 HTTP 请求都启动一次 Office。<code>NEVER_EXECUTE</code> 明确禁止执行文档宏，但不替代操作系统层面的隔离。<a href="https://api.libreoffice.org/docs/idl/ref/namespacecom_1_1sun_1_1star_1_1document_1_1MacroExecMode.html">宏执行策略</a></p>
<h3 id="43-编译运行和判断结果">4.3 编译、运行和判断结果</h3>
<p>在含 <code>pom.xml</code> 的示例根目录执行，以下类路径写法适用于 Linux：</p>
<pre><code class="hljs language-bash">mvn -DskipTests compile <span class="hljs-comment"># 编译示例，先解决依赖、JDK或源码错误</span>
mvn dependency:copy-dependencies -DoutputDirectory=target/dependency <span class="hljs-comment"># 将运行所需依赖复制到示例target目录</span>
java -<span class="hljs-built_in">cp</span> <span class="hljs-string">&#x27;target/classes:target/dependency/*&#x27;</span> example.preview.OfficeToPdf /usr/lib/libreoffice /srv/preview-input/sample.doc /srv/preview-output/sample.pdf <span class="hljs-comment"># 替换安装根目录、输入和输出，执行一次转换</span>
pdfinfo /srv/preview-output/sample.pdf <span class="hljs-comment"># 检查产物可解析，再用阅读器检查中文和分页</span>
</code></pre>
<p>Windows 的类路径分隔符是 <code>;</code>，例如 <code>-cp &quot;target/classes;target/dependency/*&quot;</code>，安装目录和文件路径含空格时分别加引号。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>示例含义</th>
<th>排障时先查什么</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>officeHome</code></td>
<td>Office安装根目录</td>
<td>其下是否存在<code>program/soffice</code>或<code>program/soffice.exe</code></td>
</tr>
<tr>
<td><code>workingDir</code></td>
<td>Office工作目录</td>
<td>服务账号写权限、磁盘和inode空间</td>
</tr>
<tr>
<td><code>hostName</code>、<code>portNumbers</code></td>
<td>本机UNO连接</td>
<td>端口占用、重复启动、是否绑定到环回地址</td>
</tr>
<tr>
<td><code>processTimeout</code></td>
<td>进程管理操作的等待限制</td>
<td>Office启动失败、缺库或残留进程</td>
</tr>
<tr>
<td><code>taskQueueTimeout</code></td>
<td>等待可用Office进程的限制</td>
<td>排队过长、并发与进程数不匹配</td>
</tr>
<tr>
<td><code>taskExecutionTimeout</code></td>
<td>单次转换执行的限制</td>
<td>文件复杂、密码保护、转换进程卡住</td>
</tr>
<tr>
<td><code>maxTasksPerProcess</code></td>
<td>处理一定数量后回收Office进程</td>
<td>长期运行的内存增长与稳定性</td>
</tr>
</tbody>
</table>
<p>所有超时都不是整个 HTTP 预览请求的统一总时限。参数以 <a href="https://jodconverter.github.io/jodconverter/4.4.10/configuration/local-configuration/">4.4.10 LocalOfficeManager 文档</a>为准。</p>
<h2 id="5-接入服务转换与状态查询分开">5. 接入服务：转换与状态查询分开</h2>
<p>转换可能持续数秒甚至更久，不建议让页面一直等待一个长 HTTP 请求。可以使用以下通用接口约定；这是示例契约，需要在自己的文件服务中实现。</p>
<table>
<thead>
<tr>
<th>接口</th>
<th>职责</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST /api/document-previews</code></td>
<td>校验当前用户的文件读取权限，命中缓存则直接返回；否则提交有界异步任务</td>
</tr>
<tr>
<td><code>GET /api/document-previews/{previewId}</code></td>
<td>仅查询状态，不产生新任务；返回前再次鉴权</td>
</tr>
<tr>
<td><code>GET /api/document-previews/{previewId}/content</code></td>
<td>鉴权后返回PDF，或跳转到新签发的短期预览地址</td>
</tr>
<tr>
<td><code>GET /api/files/{fileId}/download</code></td>
<td>独立控制的原件下载接口，默认不开放</td>
</tr>
</tbody>
</table>
<p>申请示例：</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;fileId&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;sample-file-001&quot;</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>处理中返回示例：</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;previewId&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;preview-001&quot;</span><span class="hljs-punctuation">,</span><span class="hljs-attr">&quot;status&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;PROCESSING&quot;</span><span class="hljs-punctuation">,</span><span class="hljs-attr">&quot;pollIntervalMillis&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">2000</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>成功示例：</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;previewId&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;preview-001&quot;</span><span class="hljs-punctuation">,</span><span class="hljs-attr">&quot;status&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;READY&quot;</span><span class="hljs-punctuation">,</span><span class="hljs-attr">&quot;previewUrl&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;/api/document-previews/preview-001/content&quot;</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>状态可约定为 <code>NOT_STARTED</code>、<code>PROCESSING</code>、<code>READY</code>、<code>FAILED</code>、<code>UNAVAILABLE</code>。<code>FAILED</code> 应包含可展示的简短原因，完整异常留在服务日志；不要把存储凭据、签名URL或内部路径放进错误响应。</p>
<p>建议先使用一个转换工作线程和小容量有界队列，按测试结果再扩展。队列满时明确拒绝、提示稍后重试，不能无限累积文件和任务。多实例需要共享的任务认领机制；不要因为每台机器各有一个线程，就认为同一文件不会被重复转换。</p>
<p>任务开始前先在请求线程确定授权范围和文件身份，传给后台的是已解析的存储位置及源版本；后台线程不能假定还保留着请求线程的登录上下文。</p>
<h3 id="51-前端轮询示例">5.1 前端轮询示例</h3>
<p>下面使用同源接口和 Cookie 登录态。需要额外认证头的系统，应交给现有 HTTP 客户端；不要把令牌放入URL。PDF如何呈现由已有阅读器处理。</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">requestJson</span>(<span class="hljs-params">url, options = {}</span>) {
  <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(url, { <span class="hljs-attr">credentials</span>: <span class="hljs-string">&#x27;same-origin&#x27;</span>, ...options });
  <span class="hljs-keyword">if</span> (!response.<span class="hljs-property">ok</span>) <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">\`预览请求失败：HTTP <span class="hljs-subst">\${response.status}</span>\`</span>);
  <span class="hljs-keyword">return</span> response.<span class="hljs-title function_">json</span>();
}

<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">waitForPreview</span>(<span class="hljs-params">fileId, signal</span>) {
  <span class="hljs-keyword">const</span> deadline = <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>() + <span class="hljs-number">180_000</span>; <span class="hljs-comment">// 每轮轮询检查的等待预算；单次HTTP请求还需配置超时</span>
  <span class="hljs-keyword">let</span> result = <span class="hljs-keyword">await</span> <span class="hljs-title function_">requestJson</span>(<span class="hljs-string">&#x27;/api/document-previews&#x27;</span>, {
    <span class="hljs-attr">method</span>: <span class="hljs-string">&#x27;POST&#x27;</span>,
    <span class="hljs-attr">headers</span>: { <span class="hljs-string">&#x27;Content-Type&#x27;</span>: <span class="hljs-string">&#x27;application/json&#x27;</span> },
    <span class="hljs-attr">body</span>: <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>({ fileId }),
    signal,
  });
  <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
    signal.<span class="hljs-title function_">throwIfAborted</span>(); <span class="hljs-comment">// 关闭弹窗或切换文件后，丢弃旧任务的页面结果</span>
    <span class="hljs-keyword">if</span> (<span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>() &gt;= deadline) <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">&#x27;预览等待超时，请稍后重试&#x27;</span>);
    <span class="hljs-keyword">if</span> (result.<span class="hljs-property">status</span> === <span class="hljs-string">&#x27;READY&#x27;</span> &amp;&amp; result.<span class="hljs-property">previewUrl</span>) <span class="hljs-keyword">return</span> result.<span class="hljs-property">previewUrl</span>;
    <span class="hljs-keyword">if</span> (result.<span class="hljs-property">status</span> !== <span class="hljs-string">&#x27;PROCESSING&#x27;</span>) <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(result.<span class="hljs-property">message</span> || <span class="hljs-string">&#x27;暂时无法预览&#x27;</span>);
    <span class="hljs-keyword">await</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> <span class="hljs-built_in">setTimeout</span>(resolve, <span class="hljs-number">2000</span>)); <span class="hljs-comment">// 仅查询状态，不反复提交转换</span>
    signal.<span class="hljs-title function_">throwIfAborted</span>();
    result = <span class="hljs-keyword">await</span> <span class="hljs-title function_">requestJson</span>(<span class="hljs-string">\`/api/document-previews/<span class="hljs-subst">\${<span class="hljs-built_in">encodeURIComponent</span>(result.previewId)}</span>\`</span>, { signal });
  }
}

<span class="hljs-keyword">const</span> controller = <span class="hljs-keyword">new</span> <span class="hljs-title class_">AbortController</span>(); <span class="hljs-comment">// 每次打开文件都创建独立控制器</span>
<span class="hljs-comment">// const pdfUrl = await waitForPreview(&#x27;sample-file-001&#x27;, controller.signal);</span>
<span class="hljs-comment">// 将pdfUrl交给现有PDF阅读器，标题仍显示原文件名。</span>
<span class="hljs-comment">// 弹窗关闭、切换文件或组件卸载时调用controller.abort()。</span>
</code></pre>
<p>前端取消轮询不等于服务端取消转换；后端可以完成已开始的转换并缓存结果。再次打开时查询已有结果，避免重复计算。失败时在弹窗展示错误与重试入口，不自动 <code>window.open</code> 原文件，否则“预览失败”可能变成意外下载。</p>
<h2 id="6-缓存pdf状态和访问地址是三回事">6. 缓存：PDF、状态和访问地址是三回事</h2>
<table>
<thead>
<tr>
<th>内容</th>
<th>适合放在哪里</th>
<th>什么时候失效</th>
</tr>
</thead>
<tbody>
<tr>
<td>转换后的PDF</td>
<td>私有对象存储或受控文件目录</td>
<td>源版本变化、转换规则变化，或明确的清理策略</td>
</tr>
<tr>
<td>任务状态和锁</td>
<td>Redis或任务数据库</td>
<td>状态TTL、任务完成、租约结束或故障恢复</td>
</tr>
<tr>
<td>临时访问地址</td>
<td>每次通过鉴权后签发</td>
<td>签名到期；到期不代表PDF已删除</td>
</tr>
</tbody>
</table>
<p>缓存身份至少包含授权域、源对象身份、源版本及转换规则版本。例如对这些字段的规范化组合计算 SHA-256，得到预览对象名。不要只以文件名作为缓存键；两个目录中的 <code>sample.doc</code> 不是同一份文件。</p>
<p>对象存储启用版本控制时，优先绑定确切的源版本。使用 ETag 时，不把它一概当成文件MD5；读取时增加版本条件，防止查询元数据后源文件已被替换。Office版本、字体或转换规则改变后，可以提高转换规则版本，避免继续复用旧版式。</p>
<p>处理顺序建议为：鉴权 → 确定源版本 → 查PDF产物 → 原子认领任务 → 提交队列。只有本次认领任务的持有者可以更新状态和释放锁，避免超时后的旧任务误删新任务锁。租约要覆盖排队、下载、转换、上传，或采用续期；不能只按转换的120秒估算。</p>
<p>例如状态保留30分钟，访问地址有效15分钟，PDF保留到对象生命周期清理，这三项可以互不相同。状态过期后先查产物；PDF仍在就签发新地址，不重新转换。只有“对象确实不存在”才当作缓存未命中，鉴权失败、网络故障和存储服务异常不能被吞掉后反复重转。</p>
<h2 id="7-跨域鉴权与下载控制">7. 跨域、鉴权与下载控制</h2>
<p>文件链接可以在新标签页打开，不代表页面中的 JavaScript 能读取它。页面与文件地址的协议、主机或端口不同，就可能遇到 CORS；HTTPS页面读取HTTP文件还可能触发混合内容限制。</p>
<p>优先让浏览器通过同源文件接口读取：浏览器 → <code>/api/.../content</code> → 文件服务 → 私有对象存储。文件服务根据文件ID查找已授权对象，不直接请求用户提交的任意URL。必须兼容URL参数时，只解析服务端已配置存储中的对象，并再次检查对象权限，防止变成任意地址代理。</p>
<p>若直接给浏览器签名URL，需要存储服务允许准确的页面源，并确认浏览器能到达目标地址。CORS解决不了内网地址不可达、签名过期或文件不存在。跨域读取、原文件解析、Office转换和PDF展示是不同阶段，先根据 Network 找到失败阶段。</p>
<p>原件下载应与预览分别授权，默认不开启原件下载接口。隐藏前端按钮不能代替后端检查。PDF预览本身也会向浏览器传输内容，不能承诺彻底防保存、复制或截图；只展示页面图片同样无法消除这一限制。</p>
<h2 id="8-空白文档与0字节文件">8. 空白文档与0字节文件</h2>
<p>正常保存的空白 DOC、XLS、PPT 仍有完整的文件结构，可以交给Office打开。真正的0字节文件只有一个空对象，即使后缀是<code>.doc</code>，也没有文档结构可转换。</p>
<p>默认可以明确提示“文件无内容”，跳过转换。如果产品要求仍然打开阅读器，可以生成一页有效的空白PDF作为展示占位，同时标明源文件为空。这是应用层的展示策略，不是LibreOffice转换成功；不能简单创建一个0字节的<code>.pdf</code>冒充有效PDF。</p>
<p>只读文件接口是否允许返回空字节，与转换器是否接受空源文件应分别处理。不要让转换前校验阻断所有格式的原文件读取，也不要用空白预览掩盖权限不足、404或下载失败。</p>
<h2 id="9-常见故障先定位阶段再处理">9. 常见故障：先定位阶段再处理</h2>
<table>
<thead>
<tr>
<th>现象</th>
<th>先检查</th>
<th>处理与复查</th>
</tr>
</thead>
<tbody>
<tr>
<td>Office找不到</td>
<td><code>officeHome/program</code>及运行账号</td>
<td>修正根目录；用同一账号执行版本检查</td>
</tr>
<tr>
<td>中文变方块、分页变化</td>
<td>字体匹配和原文档所用字体</td>
<td>安装获准字体，重新转换后逐页检查；更新缓存规则版本</td>
</tr>
<tr>
<td>退出正常但没有PDF</td>
<td>完整日志、输出目录、同名旧产物</td>
<td>使用独立目录重新验证；检查真实产物，不能只看退出码</td>
</tr>
<tr>
<td>一直PROCESSING</td>
<td>队列、Office进程、任务租约和失败日志</td>
<td>修复故障与过期状态后重试，不盲目延长所有超时</td>
</tr>
<tr>
<td>UNO端口被占用</td>
<td>是否另一个实例、桌面Office或旧进程</td>
<td>按所属服务正常关闭或分配独立端口，不批量杀死所有Office</td>
</tr>
<tr>
<td>XLS变成很多页</td>
<td>打印区域、纸张、缩放和隐藏内容</td>
<td>在副本中调整打印布局；需要表格交互时更换阅读方案</td>
</tr>
<tr>
<td>PDF查得到但页面读取失败</td>
<td>接口鉴权、URL有效期、CORS和浏览器网络</td>
<td>刷新访问地址或使用同源读取，不先重转PDF</td>
</tr>
<tr>
<td>密码文件或伪装扩展名</td>
<td>文件是否能被正常打开、真实格式</td>
<td>使用已授权的可转换副本；不依据后缀宣称内容合法</td>
</tr>
</tbody>
</table>
<p>Linux常用检查命令：</p>
<pre><code class="hljs language-bash">ps -ww -eo pid,ppid,user,args | grep <span class="hljs-string">&#x27;[s]office&#x27;</span> <span class="hljs-comment"># 查看进程归属和参数，区分多个Office实例</span>
<span class="hljs-built_in">sudo</span> ss -lntp <span class="hljs-string">&#x27;sport = :2002&#x27;</span> <span class="hljs-comment"># 检查示例UNO端口的监听地址与进程</span>
<span class="hljs-built_in">df</span> -h /tmp <span class="hljs-comment"># 检查临时目录所在文件系统的容量，实际工作目录不同则替换</span>
<span class="hljs-built_in">df</span> -i /tmp <span class="hljs-comment"># 检查inode是否耗尽，避免只看剩余容量</span>
fc-match sans:lang=zh-cn <span class="hljs-comment"># 核对服务环境可匹配的中文字体</span>
</code></pre>
<p>安装目录错误与权限问题不能靠<code>chmod -R 777</code>、关闭SELinux或让整个服务提权来解决。用户配置目录独立可减少实例冲突，但不是文件系统或网络安全隔离；处理上传文件时，限制转换进程可访问的目录、网络、CPU和内存，并为下载、转换和上传分别设定上限。</p>
<h2 id="10-发布前验证清单">10. 发布前验证清单</h2>
<ul>
<li>使用真正的 <code>.doc</code>、<code>.xls</code>、<code>.ppt</code> 各一份，检查中文、图片、表格和页数；另测正常空白文档与0字节文件。</li>
<li>检查首次转换、命中缓存、源文件更新、签名到期和状态过期，确认不会复用其他文件的预览。</li>
<li>测试并发提交、队列满、Office启动失败、超时和服务重启，确认有明确错误，任务不会无限PROCESSING。</li>
<li>关闭弹窗、切换文件和快速重复打开，确认旧轮询不会覆盖新文件；预览失败不触发下载。</li>
<li>使用无权限账号、已删除文件和外部URL验证边界，确认只读预览不会自动开放原件下载。</li>
<li>验证结束清理测试临时目录；预览产物的保留期按存储生命周期管理，不与状态TTL混为一谈。</li>
</ul>
`;return(c,t)=>(n(),u("div",null,[l(a,{doc:JSON.parse(c.$frontmatter.kb).doc,content:s,base:"../"},null,8,["doc"])]))}});export{i as __pageData,d as default};
