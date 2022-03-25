const actor = {
    title:'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            title: 'fullName',
            name: 'name',
            type: 'string',
            
        },

        { 
            title: 'slug',
            name: 'slug',
            type: 'slug',
            description: 'Dette er den unike URL-en',
            option: {
                source: 'name',
                maxLength: 100,
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
            }
        }
    ] 
  }
  
  export default actor