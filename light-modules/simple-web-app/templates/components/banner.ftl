[#assign styleAttribute = "style='background-color: #666666;'"]

[#if content.image?has_content]
  [#assign image = damfn.getAsset(content.image)]
  [#assign imageLink = image.link]
  
  [#if image?has_content && imageLink?has_content]
    [#assign styleAttribute = "style='background-image: url(${imageLink});'"]
  [/#if]
[/#if]


<div class="banner" ${styleAttribute}>
  [#if content.title?has_content]
    <div class="container bg-gradient-opacity-lefted">
      <div class="column">
        <div>
            <h2>${cmsfn.decode(content).title!}</h2>    
        </div>
      </div>
    </div>
  [/#if]
</div>
