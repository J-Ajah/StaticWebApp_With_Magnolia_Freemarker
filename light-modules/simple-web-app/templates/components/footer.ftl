[#assign styleAttribute = "style='background-color: #000;'"]

<div class="footer" ${styleAttribute}>
    <div class="feedback-container"> 
       [#if content.title?has_content]
          <h3 class="feedback-caption">${cmsfn.decode(content).title!}</h3>
      [/#if]
       [#if content.commentTitle?has_content]
          <h5 class="comment-title">${cmsfn.decode(content).commentTitle!}</h5>
      [/#if]
       [#if content.comment?has_content]
          <p class="comment">${cmsfn.decode(content).comment!}</p>
      [/#if]
     </div>
      <div class="contact-container">
          [#if content.contactTitle?has_content]
            <div class="comment-info"> <h3 class="feedback-caption"> ${cmsfn.decode(content).contactTitle!} </h3>
              [#if content.contactDetails?has_content]
                 <p class="comment">${cmsfn.decode(content).contactDetails!}</p>
              [/#if]
            </div>
          [/#if]
          
      </div>
</div>