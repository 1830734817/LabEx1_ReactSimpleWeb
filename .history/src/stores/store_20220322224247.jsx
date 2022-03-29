import {makeObservable,observable} from 'mbox'

export default class PersonalStore{
    @observable searchName=''

    constructor() {
    //mbox 6后需要添加这个组件才会更新
        makeObservable(this);
      }

    //用于修改状态的action动作
    @action search(SearchName) {
        this.searchName=SearchName
    }
}