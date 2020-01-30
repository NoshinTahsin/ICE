function AchReadListCreation(){ 
  
    function createAchReadListDom(product) {
           return `  
           <div class="list">

                <div class="product-info">
                   <h4 class="title">${product.title}</h4>
                   <p class="title">${product.des}</p>
                </div>

                <div class="img-info">
                    <div class="product-image">
                        <img src="${product.img}"   alt="Book_Cover">
                    </div>
                    <p class="imginfo">${product.des}</p>
                </div>
                
                <div class="add-cart-action">
                    
                    <button type="button" class="btn add-cart-btn button-${product.id}"
                    data-id="${product.id}"
                    data-toggle="modal" data-target="#myModal">Open Modal</button>

                         <div class="modal fade "  id="myModal" role="dialog">
                         <div class="modal-dialog">
    
      
      <div class="modal-content">
        
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">${product.title}</h4>
          <p class="title">${product.des}</p>
        </div>

        <div class="modal-body">

          <div class="modal-image">
            <img src="${product.img}" class="center" alt="Book_Cover">
          </div>
          <p style="margin:20px"> After the feasibility study, we head into the next phase; elicitation and analysis.
          Requirements Elicitation & Analysis
          It’s a process of interacting with customers and end-users to find out about the domain requirements, what services the system should provide, and the other constrains.
          Domain requirements reflect the environment in which the system operates so, when we talk about an application domain we mean environments such as train operation, medical records, e-commerce etc.
          It may also involve a different kinds of stockholders; end-users, managers, system engineers, test engineers, maintenance engineers, etc.
          A stakeholder is anyone who has direct or indirect influence on the requirements.
          The requirements elicitation and analysis has 4 main process
          We typically start by gathering the requirements, this could be done through a general discussion or interviews with your stakeholders, also it may involve some graphical notation.
          Then you organize the related requirements into sub components and prioritize them, and finally, you refine them by removing any ambiguous requirements that may raise from some conflicts.
          Here are the 4 main process of requirements elicitation and analysis.
          
          The process of requirements elicitation and analysis
          It shows that it’s an iterative process with a feedback from each activity to another. The process cycle starts with requirements discovery and ends with the requirements document. The cycle ends when the requirements document is complete.
          1. Requirements Discovery
          It’s the process of interacting with, and gathering the requirements from, the stakeholders about the required system and the existing system (if exist).
          It can be done using some techniques, like interviews, scenarios, prototypes, etc, which help the stockholders to understand what the system will be like.
          Gathering and understanding the requirements is a difficult process
          That’s because stakeholders may not know what exactly they want the software to do, or they may give un-realistic requirements.
          They may give different requirements, which will result in conflict between the requirements, so we have to discover and resolve these conflicts.
          Also there might be some factors that influence on the stakeholder’s decision, like for example, managers at a company or professors at the university want to take a full control over the management system.
          Interviews
          In Interviews, requirements engineering teams put the questions to the stakeholder about the system that’s currently used, and the system to be developed, and hence they can gather the requirements from the answers.
          The questions fall under two categories:
          Closed-Ended questions: A pre-defined set of question.
          Open-Ended questions: There is no a pre-defined expected answer, they are more of generic questions. It’s used to explore issues that’s not clear in a less structured way.
          In practice, interviews usually use mixture of both. Usually, start with the open-ended questions, and then use the closed-ended questions to be more specific about some requirements that aren’t clear yet.
          Interviews are good to get an overall understanding of what stakeholders need, how they might interact with the new system, and the difficulties they face with the current system.
          However, interviews aren’t so helpful in understanding the domain requirements. This is for two reasons:
          Domain requirements may be expressed using special domain terminologies, and software engineers often find it difficult to understand and it’s easy for them to misunderstand.
          Sometimes stakeholders won’t tell you some requirements because they assume it’s so fundamental and it doesn’t worth mentioning, or they find it difficult to explain, which won’t be taken into consideration in the requirements.
          Use Cases & Scenar</p>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn add-cart-btn" data-dismiss="modal">Close</button>
        </div>
        
      </div>
      
    </div>
  </div>
  
               </div>
    
           </div>
           
           `;
       }
   
       return {
           
        createAchReadListDom
       }
   }