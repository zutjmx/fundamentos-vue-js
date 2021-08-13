import { shallowMount } from '@vue/test-utils'
import Contador from '@/components/Contador'

describe('Contador Component',()=>{

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Contador)
    })

    /* test('debe de conservar su última funcionalidad', () => {
        
        const wrapper = shallowMount(Contador)

        expect(wrapper.html()).toMatchSnapshot()
    }) */

    test('h2 debe de tener el valor por defecto "Contador"',() => {
        //const wrapper = shallowMount(Contador)
        
        /* const h2 = wrapper.find('h2')
        expect(h2.text()).toBe('Contador') */

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Contador')

    })

    test('El valor por defecto debe de ser 100 en el elemento <p>', () => {
        //const wrapper = shallowMount(Contador)

        //const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="contador"]').text()

        //const segundoPTag = pTags[pTags.length-1]
        //expect(segundoPTag.text()).toBe('100')
        expect(value).toBe('100')

    })

    test('Debe de incrementar y decrementar en 1 el valor del contador', async () => {
        //const wrapper = shallowMount(Contador)

        const [btnIncremento,btnDecremento] = wrapper.findAll('button')

        await btnIncremento.trigger('click')
        await btnIncremento.trigger('click')
        await btnIncremento.trigger('click')
        await btnDecremento.trigger('click')
        await btnDecremento.trigger('click')

        const value = wrapper.find('[data-testid="contador"]').text()

        expect(value).toBe('101')
    })

    test('Debe de establecer el valor por defecto', () => {
        const {start} = wrapper.props()
        const value = wrapper.find('[data-testid="contador"]').text()

        expect(Number(value)).toBe(start)
    })

    test('Debe de mostrar la prop titulo', () => {
        const titulo = 'Hola Mundo Vue'
        const customWrapper = shallowMount(Contador, {
            props: {
                titulo: titulo,
                // start: '5'
            }
        }) //Se le pasa un valor a la propiedad titulo
        
        //console.log(customWrapper.html());
        expect(customWrapper.find('h2').text()).toBe(titulo)
    })

})
