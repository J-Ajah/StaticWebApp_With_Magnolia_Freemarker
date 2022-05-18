[#assign styleAttribute = "style='background-color: #F8F8F8;'"]
[#assign imgItemKey = content.image!]
<div class="about offer" ${styleAttribute}>
  <div class="about-imageContainer "> 
    [#if imgItemKey??]
      [#assign imgRef = damfn.getAssetLink(imgItemKey)!]
      [#if imgRef??]
          <img src="${imgRef}" class="about-img move"/>
      [/#if]
    [/#if]
  </div>
  <div class="about-infoContainer">  
    <div class="about-infoContent offer-details">
      [#if content.offerTitle?has_content]
        <h2 class="about-title">${cmsfn.decode(content).offerTitle!}</h2>
      [/#if]
      [#if content.info?has_content]
        <p class="about-details">${cmsfn.decode(content).info!}</p>
      [/#if]

    </div>
  </div>
</div>