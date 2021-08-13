import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {
    
    let wrapper
    let espiaClg

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
          })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        espiaClg = jest.spyOn(console,'log')

        jest.clearAllMocks()
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.log)', async () => {
        const getRespuestaSpy = jest.spyOn(wrapper.vm,'getRespuesta')
        
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(espiaClg).toHaveBeenCalledTimes(1)
        //expect(getRespuestaSpy).toHaveBeenCalledTimes(0)
        expect(getRespuestaSpy).not.toHaveBeenCalled()
        //console.log(wrapper.vm);
    })

    test('Escribir el simbolo de "?" debe de disparar el getRespuesta', async () => {
        const getRespuestaSpy = jest.spyOn(wrapper.vm,'getRespuesta')
        
        const input = wrapper.find('input')
        await input.setValue('Me ganaré el sorteo del palco azteca?')

        expect(espiaClg).toHaveBeenCalledTimes(1)
        expect(getRespuestaSpy).toHaveBeenCalled()
    })

    test('Pruebas en getRespuesta', async () => {
        
        await wrapper.vm.getRespuesta()
        
        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Sí!!!')

    })

    test('Pruebas en getRespuesta - falla en el API', async () => {
        
        fetch.mockImplementationOnce(() => Promise.reject('API fuera de servicio.'))

        await wrapper.vm.getRespuesta()
        
        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API')
        
    })

})