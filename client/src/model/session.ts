/* B"H
*/
import {reactive} from "vue";

const session = reactive({
    user: null as User | null,
})

export interface User {
    id?: string,
    firstName: string,
    lastName: string,
    
}