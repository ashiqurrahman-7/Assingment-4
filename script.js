let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let totalJob = document.getElementById("totalJob");


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCardSection = document.getElementById('allCards');
const filterSection = document.getElementById('filtered-section');
const mainContainer = document.querySelector('main');


function calculateCount() {
    total.innerText = allCardSection.children.length;
    totalJob.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();





function toggleStyle(id){
      allFilterBtn.classList.remove('bg-blue-500','text-white');
    interviewFilterBtn.classList.remove('bg-blue-500','text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500','text-white');

    allFilterBtn.classList.add('bg-gray-300','text-black');
    interviewFilterBtn.classList.add('bg-gray-300','text-black');
    rejectedFilterBtn.classList.add('bg-gray-300','text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300','text-black');
    selected.classList.add('bg-blue-500','text-white');
}





//This is our main container (Delegation phase)section here we collect our card information and make object of the data  and push them in the interviewList or rejectedList
mainContainer.addEventListener('click', function(event){

        const parentNode = event.target.closest('.space-y-6');
    if (!parentNode) return;

    if(event.target.classList.contains('interview-btn')){

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const address = parentNode.querySelector('.address').innerText;
        const jobSchedule = parentNode.querySelector('.jobSchedule').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.status').innerText = 'INTERVIEWED';
         
        updateAllSectionStatus(companyName, 'INTERVIEWED');
        

        const cardInfo = {
            companyName,
            position,
            address,
            jobSchedule,
            salary,
            status: 'INTERVIEWED',
            notes
        };

          if (!interviewList.find(item => item.companyName === companyName)) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        if(currentStatus === 'rejected-filter-btn'){
            renderRejected();
        }

        calculateCount();

}

        if(event.target.classList.contains('rejected-btn')){

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const address = parentNode.querySelector('.address').innerText;
        const jobSchedule = parentNode.querySelector('.jobSchedule').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.status').innerText = 'REJECTED';
        
        updateAllSectionStatus(companyName, 'REJECTED');
        

        const cardInfo = {
            companyName,
            position,
            address,
            jobSchedule,
            salary,
            status: 'REJECTED',
            notes
        };

        if (!rejectedList.find(item => item.companyName === companyName)) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName !== companyName);

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }

        calculateCount();
    }
})






//This is our Rendering phase 
//rendering Interview
function renderInterview(){
    filterSection.innerHTML = '';
   
    if(interviewList.length === 0){
        emptyState.classList.remove('hidden');
        filterSection.appendChild(emptyState);
        return;
    } else {
        emptyState.classList.add('hidden');
    }
    

    interviewList.forEach(interview => {

        let div = document.createElement('div');
        div.className = 'space-y-6  border-gray-400 shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl  mb-6';

        div.innerHTML = `
          
            <div class="space-y-6 p-8">
                    <div class="flex justify-between">
                        <div class="space-y-2">
                        <p class="text-2xl companyName ">${interview.companyName}</p>
                        <p class="position">${interview.position}</p>
                    </div> 
                    <div class="delete-card-btn"><i class="fa-solid fa-trash"></i></div>
                    </div>
                    <div class="flex gap-3 ">
                        <p class="address">${interview.address}</p>
                        <p class="jobSchedule">${interview.jobSchedule}</p>
                        <p class="salary">${interview.salary}</p>
                    </div>
                    <p class="status">${interview.status}</p>
                    <p class="notes">${interview.notes}</p>
                   <button class="interview-btn border border-green-400 text-green-400 font-bold px-4 py-2 hover:bg-green-400 hover:text-white transition duration-300 rounded">INTERVIEW</button>

                         <button class="rejected-btn border border-red-400 text-red-400 font-bold px-4 py-2 hover:bg-red-400 hover:text-white transition duration-300"> REJECTED</button>
                    
                </div>
        `;

        filterSection.appendChild(div);
    });
}


//This is our rejected rendering phase 
function renderRejected(){
    filterSection.innerHTML = '';

   
    if(rejectedList.length === 0){
        emptyState.classList.remove('hidden');
        filterSection.appendChild(emptyState);
        return;
    } else {
        emptyState.classList.add('hidden');
    }
   

    rejectedList.forEach(rejected => {

        let div = document.createElement('div');
        div.className = 'space-y-6  border-gray-400 shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl  mb-6';

        div.innerHTML = `
           <div class="space-y-6  p-8">
                    <div class="flex justify-between">
                        <div class="space-y-2">
                        <p class="text-2xl companyName ">${rejected.companyName}</p>
                        <p class="position">${rejected.position}</p>
                    </div> 
                    <div class="delete-card-btn"><i class="fa-solid fa-trash"></i></div>
                    </div>
                    <div class="flex gap-3 ">
                        <p class="address">${rejected.address}</p>
                        <p class="jobSchedule">${rejected.jobSchedule}</p>
                        <p class="salary">${rejected.salary}</p>
                    </div>
                    <p class="status">${rejected.status}</p>
                    <p class="notes">${rejected.notes}</p>
                    <button class="interview-btn border border-green-400 text-green-400 font-bold px-4 py-2 hover:bg-green-400 hover:text-white transition duration-300 rounded">INTERVIEW</button>

                         <button class="rejected-btn border border-red-400 text-red-400 font-bold px-4 py-2 hover:bg-red-400 hover:text-white transition duration-300"> REJECTED</button>
                    
                </div>
        `;

        filterSection.appendChild(div);
    });
}