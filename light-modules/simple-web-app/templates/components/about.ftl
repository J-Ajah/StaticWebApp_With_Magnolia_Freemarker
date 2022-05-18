[#assign imgItemKey = content.image!]
<div class="about">
  <div class="about-infoContainer">  
    <div class="about-infoContent">
      [#if content.aboutTitle?has_content]
        <h2 class="about-title">${cmsfn.decode(content).aboutTitle!}</h2>
      [/#if]
      [#if content.info?has_content]
        <p class="about-details">${cmsfn.decode(content).info!}</p>
      [/#if]

    </div>
  </div>
  <div class="about-imageContainer"> 
    [#if imgItemKey??]
      [#assign imgRef = damfn.getAssetLink(imgItemKey)!]
      [#if imgRef??]
          <img src="${imgRef}" class="about-img"/>
      [/#if]
    [/#if]
  </div>
</div>
