import IdeasApi from '../services/ideasApi';

class IdeaList {
    constructor(){
        this._ideaListEl = document.querySelector('#idea-list');
        this._ideas = [];
        this.getIdeas();
        this._validTags  = new Set();
        this._validTags.add('technology');
        this._validTags.add('software');
        this._validTags.add('business');
        this._validTags.add('education');
        this._validTags.add('health');
        this._validTags.add('inventions');
    }
    async getIdeas(){
        try {
            const res = await IdeasApi.getIdeas();
            this._ideas = res.data.data;
            this.render();
            console.log(this._ideas)
        } catch (error) {
            console.log(error)
        }
    }

    getTagClass(tag){
        tag = tag.toLowerCase();
        let tagClass = '';
        //is the tag included in the set?
        if(this._validTags.has(tag)){
            tagClass = `tag-${tag}`
        }else{
            tagClass = '';
        }
        return tagClass;
    }
    render(){
        this._ideaListEl.innerHTML = this._ideas.map((idea)=>{
            const tagClass = this.getTagClass(idea.tag);
            return `
            <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
            `;
        }).join('');
    }
}
export default  IdeaList;