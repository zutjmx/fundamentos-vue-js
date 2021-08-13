import { shallowMount } from '@vue/test-utils'
import Contador from '@/components/Contador'

describe('Contador Component',()=>{
    /* test('debe de conservar su última funcionalidad', () => {
        
        const wrapper = shallowMount(Contador)

        expect(wrapper.html()).toMatchSnapshot()
    }) */
    test('h2 debe de tener el valor por defecto "Contador"',() => {
        const wrapper = shallowMount(Contador)
        
        /* const h2 = wrapper.find('h2')
        expect(h2.text()).toBe('Contador') */

        expect(wrapper.find('h2').exists())

        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Contador')

    })
})
