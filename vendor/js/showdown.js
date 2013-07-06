


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>showdown/compressed/showdown.js at master · coreyti/showdown · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/modules/logos_page/Octocat.png">
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="GKR9CUp9X5ud4/k7lXR6OpKWSaQgJq0Cp9f63u80j0k=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-3cd5474511c95dff221d37e940ad18715f0749d1.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-c8fae3a887e5e0e51b7fe06f228ba7b53cc45e53.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-1f72571b966545f4e27481a3b0ebbeeed4f2f139.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-2f6297f0b27094daddf8764f724d24fc6db0d8a5.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="9cfe3e8788aec8885441f3a96d5b8918">

        <link data-pjax-transient rel='permalink' href='/coreyti/showdown/blob/2e102c72b26708147817f8f5e4ab1161a38a57a0/compressed/showdown.js'>
  <meta property="og:title" content="showdown"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/coreyti/showdown"/>
  <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="JavaScript port of Markdown (from http://attacklab.net/showdown/)"/>

  <meta name="description" content="JavaScript port of Markdown (from http://attacklab.net/showdown/)" />

  <meta content="4937" name="octolytics-dimension-user_id" /><meta content="coreyti" name="octolytics-dimension-user_login" /><meta content="75547" name="octolytics-dimension-repository_id" /><meta content="coreyti/showdown" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="75547" name="octolytics-dimension-repository_network_root_id" /><meta content="coreyti/showdown" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/coreyti/showdown/commits/master.atom" rel="alternate" title="Recent Commits to showdown:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production ">

    <div class="wrapper">
      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fcoreyti%2Fshowdown%2Fblob%2Fmaster%2Fcompressed%2Fshowdown.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="coreyti/showdown"
      data-branch="master"
      data-sha="fb6d444b0f4dc6d23a59cf440513b3a7a64e4803"
  >

    <input type="hidden" name="nwo" value="coreyti/showdown" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


    <li>
      <a href="/login?return_to=%2Fcoreyti%2Fshowdown"
        class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/coreyti/showdown/stargazers">
        1,291
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fcoreyti%2Fshowdown"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/coreyti/showdown/network" class="social-count">
        284
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/coreyti" class="url fn" itemprop="url" rel="author"><span itemprop="title">coreyti</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/coreyti/showdown" class="js-current-repository js-repo-home-link">showdown</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container
            ">

          <div class="repository-sidebar">

              

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/coreyti/showdown" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /coreyti/showdown">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/coreyti/showdown/issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /coreyti/showdown/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>23</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/coreyti/showdown/pulls" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /coreyti/showdown/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>11</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>




    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/coreyti/showdown/pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /coreyti/showdown/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/coreyti/showdown/graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /coreyti/showdown/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/coreyti/showdown/network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /coreyti/showdown/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>


              <div class="only-with-full-nav">

                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/coreyti/showdown.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/coreyti/showdown.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/coreyti/showdown" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/coreyti/showdown" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>

  <a href="http://mac.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>



                  <a href="/coreyti/showdown/archive/master.zip"
                     class="minibutton sidebar-button"
                     title="Download this repository as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>

              </div>
          </div>

          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
            


<!-- blob contrib key: blob_contributors:v21:c08553593c588269674e794fb2b32b48 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:c08553593c588269674e794fb2b32b48 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/coreyti/showdown/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/coreyti/showdown/blob/master/compressed/showdown.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/coreyti/showdown/blob/v0.3.1/compressed/showdown.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.3.1" rel="nofollow" title="v0.3.1">v0.3.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/coreyti/showdown" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">showdown</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/coreyti/showdown/tree/master/compressed" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">compressed</span></a></span><span class="separator"> / </span><strong class="final-path">showdown.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="compressed/showdown.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/ba629bb465f462cec2596f4b7f62cb99?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/coreyti" rel="author">coreyti</a></span>
    <time class="js-relative-date" datetime="2012-11-02T03:18:47-07:00" title="2012-11-02 03:18:47">November 02, 2012</time>
    <div class="commit-title">
        <a href="/coreyti/showdown/commit/2e102c72b26708147817f8f5e4ab1161a38a57a0" class="message" data-pjax="true">update output files</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="coreyti" href="/coreyti/showdown/commits/master/compressed/showdown.js?author=coreyti"><img height="20" src="https://secure.gravatar.com/avatar/ba629bb465f462cec2596f4b7f62cb99?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="remy" href="/coreyti/showdown/commits/master/compressed/showdown.js?author=remy"><img height="20" src="https://secure.gravatar.com/avatar/c8b387c489181844b3ffc704fadc0f14?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/ba629bb465f462cec2596f4b7f62cb99?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/coreyti">coreyti</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/c8b387c489181844b3ffc704fadc0f14?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/remy">remy</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>62 lines (62 sloc)</span>
        <span>11.304 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton js-entice" href=""
                 data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
          <a href="/coreyti/showdown/raw/master/compressed/showdown.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/coreyti/showdown/blame/master/compressed/showdown.js" class="button minibutton ">Blame</a>
          <a href="/coreyti/showdown/commits/master/compressed/showdown.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">//</span></div><div class='line' id='LC2'><span class="c1">// showdown.js -- A javascript port of Markdown.</span></div><div class='line' id='LC3'><span class="c1">//</span></div><div class='line' id='LC4'><span class="c1">// Copyright (c) 2007 John Fraser.</span></div><div class='line' id='LC5'><span class="c1">//</span></div><div class='line' id='LC6'><span class="c1">// Original Markdown Copyright (c) 2004-2005 John Gruber</span></div><div class='line' id='LC7'><span class="c1">//   &lt;http://daringfireball.net/projects/markdown/&gt;</span></div><div class='line' id='LC8'><span class="c1">//</span></div><div class='line' id='LC9'><span class="c1">// Redistributable under a BSD-style open source license.</span></div><div class='line' id='LC10'><span class="c1">// See license.txt for more information.</span></div><div class='line' id='LC11'><span class="c1">//</span></div><div class='line' id='LC12'><span class="c1">// The full source distribution is at:</span></div><div class='line' id='LC13'><span class="c1">//</span></div><div class='line' id='LC14'><span class="c1">//				A A L</span></div><div class='line' id='LC15'><span class="c1">//				T C A</span></div><div class='line' id='LC16'><span class="c1">//				T K B</span></div><div class='line' id='LC17'><span class="c1">//</span></div><div class='line' id='LC18'><span class="c1">//   &lt;http://www.attacklab.net/&gt;</span></div><div class='line' id='LC19'><span class="c1">//</span></div><div class='line' id='LC20'><span class="c1">//</span></div><div class='line' id='LC21'><span class="c1">// Wherever possible, Showdown is a straight, line-by-line port</span></div><div class='line' id='LC22'><span class="c1">// of the Perl version of Markdown.</span></div><div class='line' id='LC23'><span class="c1">//</span></div><div class='line' id='LC24'><span class="c1">// This is not a normal parser design; it&#39;s basically just a</span></div><div class='line' id='LC25'><span class="c1">// series of string substitutions.  It&#39;s hard to read and</span></div><div class='line' id='LC26'><span class="c1">// maintain this way,  but keeping Showdown close to the original</span></div><div class='line' id='LC27'><span class="c1">// design makes it easier to port new features.</span></div><div class='line' id='LC28'><span class="c1">//</span></div><div class='line' id='LC29'><span class="c1">// More importantly, Showdown behaves like markdown.pl in most</span></div><div class='line' id='LC30'><span class="c1">// edge cases.  So web applications can do client-side preview</span></div><div class='line' id='LC31'><span class="c1">// in Javascript, and then build identical HTML on the server.</span></div><div class='line' id='LC32'><span class="c1">//</span></div><div class='line' id='LC33'><span class="c1">// This port needs the new RegExp functionality of ECMA 262,</span></div><div class='line' id='LC34'><span class="c1">// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers</span></div><div class='line' id='LC35'><span class="c1">// should do fine.  Even with the new regular expression features,</span></div><div class='line' id='LC36'><span class="c1">// We do a lot of work to emulate Perl&#39;s regex functionality.</span></div><div class='line' id='LC37'><span class="c1">// The tricky changes in this file mostly have the &quot;attacklab:&quot;</span></div><div class='line' id='LC38'><span class="c1">// label.  Major or self-explanatory changes don&#39;t.</span></div><div class='line' id='LC39'><span class="c1">//</span></div><div class='line' id='LC40'><span class="c1">// Smart diff tools like Araxis Merge will be able to match up</span></div><div class='line' id='LC41'><span class="c1">// this file with markdown.pl in a useful way.  A little tweaking</span></div><div class='line' id='LC42'><span class="c1">// helps: in a copy of markdown.pl, replace &quot;#&quot; with &quot;//&quot; and</span></div><div class='line' id='LC43'><span class="c1">// replace &quot;$text&quot; with &quot;text&quot;.  Be sure to ignore whitespace</span></div><div class='line' id='LC44'><span class="c1">// and line endings.</span></div><div class='line' id='LC45'><span class="c1">//</span></div><div class='line' id='LC46'><span class="c1">//</span></div><div class='line' id='LC47'><span class="c1">// Showdown usage:</span></div><div class='line' id='LC48'><span class="c1">//</span></div><div class='line' id='LC49'><span class="c1">//   var text = &quot;Markdown *rocks*.&quot;;</span></div><div class='line' id='LC50'><span class="c1">//</span></div><div class='line' id='LC51'><span class="c1">//   var converter = new Showdown.converter();</span></div><div class='line' id='LC52'><span class="c1">//   var html = converter.makeHtml(text);</span></div><div class='line' id='LC53'><span class="c1">//</span></div><div class='line' id='LC54'><span class="c1">//   alert(html);</span></div><div class='line' id='LC55'><span class="c1">//</span></div><div class='line' id='LC56'><span class="c1">// Note: move the sample code to the bottom of this</span></div><div class='line' id='LC57'><span class="c1">// file before uncommenting it.</span></div><div class='line' id='LC58'><span class="c1">//</span></div><div class='line' id='LC59'><span class="c1">//</span></div><div class='line' id='LC60'><span class="c1">// Showdown namespace</span></div><div class='line' id='LC61'><span class="c1">//</span></div><div class='line' id='LC62'><span class="kd">var</span> <span class="nx">Showdown</span><span class="o">=</span><span class="p">{</span><span class="nx">extensions</span><span class="o">:</span><span class="p">{}},</span><span class="nx">forEach</span><span class="o">=</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span><span class="p">.</span><span class="nx">forEach</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">c</span><span class="o">&lt;</span><span class="nx">d</span><span class="p">;</span><span class="nx">c</span><span class="o">++</span><span class="p">)</span><span class="nx">b</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">c</span><span class="p">,</span><span class="nx">a</span><span class="p">)}},</span><span class="nx">stdExtName</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[_-]||\s/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()};</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">converter</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="p">[],</span><span class="nx">g</span><span class="o">=</span><span class="p">[];</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span><span class="o">!=</span><span class="s2">&quot;undefind&quot;</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">exports</span><span class="o">!=</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">require</span><span class="o">!=</span><span class="s2">&quot;undefind&quot;</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;fs&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">){</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">readdirSync</span><span class="p">((</span><span class="nx">__dirname</span><span class="o">||</span><span class="s2">&quot;.&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;/extensions&quot;</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="o">~</span><span class="nx">a</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;.js&quot;</span><span class="p">)}).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\.js$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">)});</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">stdExtName</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">extensions</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">=</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;./extensions/&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">)})}}</span><span class="k">this</span><span class="p">.</span><span class="nx">makeHtml</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="o">=</span><span class="p">{},</span><span class="nx">c</span><span class="o">=</span><span class="p">{},</span><span class="nx">d</span><span class="o">=</span><span class="p">[],</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~/g</span><span class="p">,</span><span class="s2">&quot;~T&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\$/g</span><span class="p">,</span><span class="s2">&quot;~D&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="s2">&quot;\n\n&quot;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;\n\n&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">M</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]+$/mg</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">k</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">z</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">l</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">o</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">K</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~D/g</span><span class="p">,</span><span class="s2">&quot;$$&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~T/g</span><span class="p">,</span><span class="s2">&quot;~&quot;</span><span class="p">),</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">k</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">)}),</span><span class="nx">a</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">extensions</span><span class="p">){</span><span class="kd">var</span> <span class="nx">j</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">extensions</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">typeof</span> <span class="nx">a</span><span class="o">==</span><span class="s2">&quot;string&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">extensions</span><span class="p">[</span><span class="nx">stdExtName</span><span class="p">(</span><span class="nx">a</span><span class="p">)]);</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span><span class="o">!=</span><span class="s2">&quot;function&quot;</span><span class="p">)</span><span class="k">throw</span><span class="s2">&quot;Extension &#39;&quot;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;&#39; could not be loaded.  It was either not found or is not a valid extension.&quot;</span><span class="p">;</span><span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">a</span><span class="p">(</span><span class="nx">j</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;language&quot;</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;lang&quot;</span><span class="o">?</span><span class="nx">f</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;output&quot;</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;html&quot;</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)})})}</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">regex</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">regex</span><span class="p">,</span><span class="s2">&quot;g&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">filter</span><span class="p">)</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">b</span><span class="p">)},</span><span class="nx">l</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*&lt;?(\S+?)&gt;?[ \t]*\n?[ \t]*(?:(\n*)[&quot;(](.+?)[&quot;)][ \t]*)?(?:\n+|(?=~0))/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">){</span><span class="k">return</span> <span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">=</span><span class="nx">G</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">f</span><span class="o">?</span><span class="nx">f</span><span class="o">+</span><span class="nx">g</span><span class="o">:</span><span class="p">(</span><span class="nx">g</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">)),</span><span class="s2">&quot;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">m</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n/g</span><span class="p">,</span><span class="s2">&quot;\n\n&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="s2">&quot;p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside&quot;</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="s2">&quot;p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside&quot;</span><span class="p">;</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(&lt;(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n&lt;\/\2&gt;[ \t]*(?=\n+))/gm</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(&lt;(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?&lt;\/\2&gt;[ \t]*(?=\n+)\n)/gm</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n[ ]{0,3}(&lt;(hr)\b([^&lt;&gt;])*?\/?&gt;)[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n\n[ ]{0,3}&lt;!(--[^\r]*?--\s*)+&gt;[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:\n\n)([ ]{0,3}(?:&lt;([?%])[^\r]*?\2&gt;)[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">n</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="k">return</span> <span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="s2">&quot;\n\n~K&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;K\n\n&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">},</span><span class="nx">o</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">v</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">A</span><span class="p">(</span><span class="s2">&quot;&lt;hr /&gt;&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">x</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">y</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">E</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">F</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">p</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">B</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">q</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">H</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">r</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">I</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">G</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">D</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/  +\n/g</span><span class="p">,</span><span class="s2">&quot; &lt;br /&gt;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">q</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="sr">/(&lt;[a-z\/!$](&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;|[^&#39;&quot;&gt;])*&gt;|&lt;!(--.*?--\s*)+&gt;)/gi</span><span class="p">;</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(.)&lt;\/?code&gt;(?=.)/g</span><span class="p">,</span><span class="s2">&quot;$1`&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">b</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;\\`*_&quot;</span><span class="p">),</span><span class="nx">b</span><span class="p">}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">r</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g</span><span class="p">,</span><span class="nx">s</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()&lt;?(.*?(?:\(.*?\).*?)?)&gt;?[ \t]*(([&#39;&quot;])(.*?)\6[ \t]*)?\))/g</span><span class="p">,</span><span class="nx">s</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[([^\[\]]+)\])()()()()()/g</span><span class="p">,</span><span class="nx">s</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">s</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="p">){</span><span class="nx">j</span><span class="o">==</span><span class="kc">undefined</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">n</span><span class="o">=</span><span class="nx">g</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nx">j</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">==</span><span class="s2">&quot;&quot;</span><span class="p">){</span><span class="nx">m</span><span class="o">==</span><span class="s2">&quot;&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">m</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ ?\n/g</span><span class="p">,</span><span class="s2">&quot; &quot;</span><span class="p">)),</span><span class="nx">n</span><span class="o">=</span><span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">m</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">!=</span><span class="kc">undefined</span><span class="p">)</span><span class="nx">n</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">m</span><span class="p">],</span><span class="nx">c</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">!=</span><span class="kc">undefined</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">o</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">m</span><span class="p">]);</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">k</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\(\s*\)$/m</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="p">))</span><span class="k">return</span> <span class="nx">k</span><span class="p">;</span><span class="nx">n</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">}}</span><span class="nx">n</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="s1">&#39;&lt;a href=&quot;&#39;</span><span class="o">+</span><span class="nx">n</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">;</span><span class="k">return</span> <span class="nx">o</span><span class="o">!=</span><span class="s2">&quot;&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">o</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">),</span><span class="nx">o</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">),</span><span class="nx">p</span><span class="o">+=</span><span class="s1">&#39; title=&quot;&#39;</span><span class="o">+</span><span class="nx">o</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">),</span><span class="nx">p</span><span class="o">+=</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">l</span><span class="o">+</span><span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">,</span><span class="nx">p</span><span class="p">},</span><span class="nx">t</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g</span><span class="p">,</span><span class="nx">u</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(!\[(.*?)\]\s?\([ \t]*()&lt;?(\S+?)&gt;?[ \t]*(([&#39;&quot;])(.*?)\6[ \t]*)?\))/g</span><span class="p">,</span><span class="nx">u</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">u</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="p">){</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">n</span><span class="o">=</span><span class="nx">g</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nx">j</span><span class="p">;</span><span class="nx">o</span><span class="o">||</span><span class="p">(</span><span class="nx">o</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">==</span><span class="s2">&quot;&quot;</span><span class="p">){</span><span class="nx">m</span><span class="o">==</span><span class="s2">&quot;&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">m</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ ?\n/g</span><span class="p">,</span><span class="s2">&quot; &quot;</span><span class="p">)),</span><span class="nx">n</span><span class="o">=</span><span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">m</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">==</span><span class="kc">undefined</span><span class="p">)</span><span class="k">return</span> <span class="nx">k</span><span class="p">;</span><span class="nx">n</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">m</span><span class="p">],</span><span class="nx">c</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">!=</span><span class="kc">undefined</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">o</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">m</span><span class="p">])}</span><span class="nx">l</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">),</span><span class="nx">n</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="s1">&#39;&lt;img src=&quot;&#39;</span><span class="o">+</span><span class="nx">n</span><span class="o">+</span><span class="s1">&#39;&quot; alt=&quot;&#39;</span><span class="o">+</span><span class="nx">l</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">;</span><span class="k">return</span> <span class="nx">o</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">),</span><span class="nx">o</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">),</span><span class="nx">p</span><span class="o">+=</span><span class="s1">&#39; title=&quot;&#39;</span><span class="o">+</span><span class="nx">o</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">,</span><span class="nx">p</span><span class="o">+=</span><span class="s2">&quot; /&gt;&quot;</span><span class="p">,</span><span class="nx">p</span><span class="p">},</span><span class="nx">v</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">function</span> <span class="nx">b</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[^\w]/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()}</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.+)[ \t]*\n=+[ \t]*\n+/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">A</span><span class="p">(</span><span class="s1">&#39;&lt;h1 id=&quot;&#39;</span><span class="o">+</span><span class="nx">b</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">p</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&lt;/h1&gt;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.+)[ \t]*\n-+[ \t]*\n+/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">A</span><span class="p">(</span><span class="s1">&#39;&lt;h2 id=&quot;&#39;</span><span class="o">+</span><span class="nx">b</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">p</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&lt;/h2&gt;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">return</span> <span class="nx">A</span><span class="p">(</span><span class="s2">&quot;&lt;h&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s1">&#39; id=&quot;&#39;</span><span class="o">+</span><span class="nx">b</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">p</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&lt;/h&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">w</span><span class="p">,</span><span class="nx">x</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">;</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="sr">/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm</span><span class="p">;</span><span class="k">return</span> <span class="nx">e</span><span class="o">?</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/[*+-]/g</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">?</span><span class="s2">&quot;ul&quot;</span><span class="o">:</span><span class="s2">&quot;ol&quot;</span><span class="p">;</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">,</span><span class="s2">&quot;\n\n\n&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">w</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="k">return</span> <span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="s2">&quot;&lt;&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;&lt;/&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">})</span><span class="o">:</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="sr">/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/[*+-]/g</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">?</span><span class="s2">&quot;ul&quot;</span><span class="o">:</span><span class="s2">&quot;ol&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">,</span><span class="s2">&quot;\n\n\n&quot;</span><span class="p">),</span><span class="nx">h</span><span class="o">=</span><span class="nx">w</span><span class="p">(</span><span class="nx">f</span><span class="p">);</span><span class="k">return</span> <span class="nx">h</span><span class="o">=</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&lt;&quot;</span><span class="o">+</span><span class="nx">g</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span><span class="o">+</span><span class="nx">h</span><span class="o">+</span><span class="s2">&quot;&lt;/&quot;</span><span class="o">+</span><span class="nx">g</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span><span class="p">,</span><span class="nx">h</span><span class="p">})),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">};</span><span class="nx">w</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">e</span><span class="o">++</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}$/</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">c</span><span class="p">;</span><span class="k">return</span> <span class="nx">g</span><span class="o">||</span><span class="nx">f</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\n{2,}/</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">?</span><span class="nx">f</span><span class="o">=</span><span class="nx">o</span><span class="p">(</span><span class="nx">L</span><span class="p">(</span><span class="nx">f</span><span class="p">))</span><span class="o">:</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="nx">x</span><span class="p">(</span><span class="nx">L</span><span class="p">(</span><span class="nx">f</span><span class="p">)),</span><span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">p</span><span class="p">(</span><span class="nx">f</span><span class="p">)),</span><span class="s2">&quot;&lt;li&gt;&quot;</span><span class="o">+</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;&lt;/li&gt;\n&quot;</span><span class="p">}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">e</span><span class="o">--</span><span class="p">,</span><span class="nx">a</span><span class="p">};</span><span class="kd">var</span> <span class="nx">y</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">;</span><span class="k">return</span> <span class="nx">d</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">L</span><span class="p">(</span><span class="nx">d</span><span class="p">)),</span><span class="nx">d</span><span class="o">=</span><span class="nx">M</span><span class="p">(</span><span class="nx">d</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;&lt;pre&gt;&lt;code&gt;&quot;</span><span class="o">+</span><span class="nx">d</span><span class="o">+</span><span class="s2">&quot;\n&lt;/code&gt;&lt;/pre&gt;&quot;</span><span class="p">,</span><span class="nx">A</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">+</span><span class="nx">e</span><span class="p">}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">z</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">+=</span><span class="s2">&quot;~0&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">;</span><span class="k">return</span> <span class="nx">e</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">M</span><span class="p">(</span><span class="nx">e</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="s2">&quot;&lt;pre&gt;&lt;code&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">d</span><span class="o">?</span><span class="s1">&#39; class=&quot;&#39;</span><span class="o">+</span><span class="nx">d</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;\n&lt;/code&gt;&lt;/pre&gt;&quot;</span><span class="p">,</span><span class="nx">A</span><span class="p">(</span><span class="nx">e</span><span class="p">)}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">A</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^\n+|\n+$)/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="s2">&quot;\n\n~K&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;K\n\n&quot;</span><span class="p">},</span><span class="nx">B</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">d</span><span class="p">;</span><span class="k">return</span> <span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^([ \t]*)/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[ \t]*$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">f</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">f</span><span class="p">),</span><span class="nx">b</span><span class="o">+</span><span class="s2">&quot;&lt;code&gt;&quot;</span><span class="o">+</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;&lt;/code&gt;&quot;</span><span class="p">}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">C</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;/g</span><span class="p">,</span><span class="s2">&quot;&amp;amp;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;/g</span><span class="p">,</span><span class="s2">&quot;&amp;lt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&gt;/g</span><span class="p">,</span><span class="s2">&quot;&amp;gt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;*_{}[]\\&quot;</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">D</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g</span><span class="p">,</span><span class="s2">&quot;&lt;strong&gt;$2&lt;/strong&gt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\*|_)(?=\S)([^\r]*?\S)\1/g</span><span class="p">,</span><span class="s2">&quot;&lt;em&gt;$2&lt;/em&gt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">E</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/((^[ \t]*&gt;[ \t]?.+\n(.+\n)*\n*)+)/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="k">return</span> <span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]*&gt;[ \t]?/gm</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]+$/gm</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">o</span><span class="p">(</span><span class="nx">c</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|\n)/g</span><span class="p">,</span><span class="s2">&quot;$1  &quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\s*&lt;pre&gt;[^\r]+?&lt;\/pre&gt;)/gm</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="k">return</span> <span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^  /mg</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">}),</span><span class="nx">A</span><span class="p">(</span><span class="s2">&quot;&lt;blockquote&gt;\n&quot;</span><span class="o">+</span><span class="nx">c</span><span class="o">+</span><span class="s2">&quot;\n&lt;/blockquote&gt;&quot;</span><span class="p">)}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">F</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="p">[],</span><span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">e</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">g</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">];</span><span class="nx">g</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/~K(\d+)K/g</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">g</span><span class="p">)</span><span class="o">:</span><span class="nx">g</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\S/</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">g</span><span class="o">=</span><span class="nx">p</span><span class="p">(</span><span class="nx">g</span><span class="p">),</span><span class="nx">g</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^([ \t]*)/g</span><span class="p">,</span><span class="s2">&quot;&lt;p&gt;&quot;</span><span class="p">),</span><span class="nx">g</span><span class="o">+=</span><span class="s2">&quot;&lt;/p&gt;&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">g</span><span class="p">))}</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">e</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">)</span><span class="k">while</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="nx">f</span><span class="p">].</span><span class="nx">search</span><span class="p">(</span><span class="sr">/~K(\d+)K/</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="p">){</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">];</span><span class="nx">h</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\$/g</span><span class="p">,</span><span class="s2">&quot;$$$$&quot;</span><span class="p">),</span><span class="nx">c</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">f</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~K\d+K/</span><span class="p">,</span><span class="nx">h</span><span class="p">)}</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\n\n&quot;</span><span class="p">)},</span><span class="nx">G</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g</span><span class="p">,</span><span class="s2">&quot;&amp;amp;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;(?![a-z\/?\$!])/gi</span><span class="p">,</span><span class="s2">&quot;&amp;lt;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">H</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\(\\)/g</span><span class="p">,</span><span class="nx">O</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\([`*_{}\[\]()&gt;#+-.!])/g</span><span class="p">,</span><span class="nx">O</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">I</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;((https?|ftp|dict):[^&#39;&quot;&gt;\s]+)&gt;/gi</span><span class="p">,</span><span class="s1">&#39;&lt;a href=&quot;$1&quot;&gt;$1&lt;/a&gt;&#39;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)&gt;/gi</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">J</span><span class="p">(</span><span class="nx">K</span><span class="p">(</span><span class="nx">b</span><span class="p">))}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">J</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="p">[</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;&amp;#&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;;&quot;</span><span class="p">},</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;&amp;#x&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;;&quot;</span><span class="p">},</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="p">}];</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="s2">&quot;mailto:&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/./g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">==</span><span class="s2">&quot;@&quot;</span><span class="p">)</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span><span class="o">*</span><span class="mi">2</span><span class="p">)](</span><span class="nx">a</span><span class="p">);</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">!=</span><span class="s2">&quot;:&quot;</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span><span class="nx">a</span><span class="o">=</span><span class="nx">c</span><span class="o">&gt;</span><span class="p">.</span><span class="mi">9</span><span class="o">?</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">](</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="o">&gt;</span><span class="p">.</span><span class="mi">45</span><span class="o">?</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">](</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">](</span><span class="nx">a</span><span class="p">)}</span><span class="k">return</span> <span class="nx">a</span><span class="p">}),</span><span class="nx">a</span><span class="o">=</span><span class="s1">&#39;&lt;a href=&quot;&#39;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;&gt;.+:/g</span><span class="p">,</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">K</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~E(\d+)E/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">return</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">c</span><span class="p">)}),</span><span class="nx">a</span><span class="p">},</span><span class="nx">L</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(\t|[ ]{1,4})/gm</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">M</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t(?=\t)/g</span><span class="p">,</span><span class="s2">&quot;    &quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t/g</span><span class="p">,</span><span class="s2">&quot;~A~B&quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~B(.+?)~A/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="mi">4</span><span class="o">-</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="o">%</span><span class="mi">4</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">e</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">)</span><span class="nx">d</span><span class="o">+=</span><span class="s2">&quot; &quot;</span><span class="p">;</span><span class="k">return</span> <span class="nx">d</span><span class="p">}),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~A/g</span><span class="p">,</span><span class="s2">&quot;    &quot;</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~B/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">N</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="s2">&quot;([&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/([\[\]\\])/g</span><span class="p">,</span><span class="s2">&quot;\\$1&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;])&quot;</span><span class="p">;</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;\\\\&quot;</span><span class="o">+</span><span class="nx">d</span><span class="p">);</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="s2">&quot;g&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">O</span><span class="p">),</span><span class="nx">a</span><span class="p">},</span><span class="nx">O</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span><span class="k">return</span><span class="s2">&quot;~E&quot;</span><span class="o">+</span><span class="nx">c</span><span class="o">+</span><span class="s2">&quot;E&quot;</span><span class="p">}},</span><span class="k">typeof</span> <span class="nx">module</span><span class="o">!=</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="o">=</span><span class="nx">Showdown</span><span class="p">),</span><span class="k">typeof</span> <span class="nx">define</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">(</span><span class="s2">&quot;showdown&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">Showdown</span><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
    <button type="submit" class="button">Go</button>
  </form>
</div>
          </div>
        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div>
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">Developer</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.04391s from fe16.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/coreyti/showdown/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
    <span id='server_response_time' data-time='0.04431' data-host='fe16'></span>
    
  </body>
</html>

