import VueRouter from 'vue-router';
import Listagem from './components/Listagem';
import Local from './components/Local';
 
export default new VueRouter({
    mode :'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Listagem
        },{
            path: '/local/:id',
            name: 'local',
            component: Local
        },
    ]
});