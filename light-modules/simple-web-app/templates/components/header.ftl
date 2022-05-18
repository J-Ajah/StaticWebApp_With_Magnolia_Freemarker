<div class="header">
  [#if content.pagesName?has_content]
    <h2>${content.pagesName!}</h2>
  [/#if]
  <div class="links-container">
     <ul class="nav-links">  
         [#if content.navText1?has_content]
         <li>${content.navText1!}</li>
        [/#if]
         [#if content.navText2?has_content]
         <li>${content.navText2!}</li>
        [/#if]
        [#if content.navText3?has_content]
         <li>${content.navText3!}</li>
        [/#if]
     </ul>
        
        
  </div>
</div>
