export function checkProspects(leads, prospects) {
  
    let newLeads = leads.filter(item1 => 
        !prospects.some(item2 => (item2.identification === item1.identification  )))
    
    return newLeads;
}


 