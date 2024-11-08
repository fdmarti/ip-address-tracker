import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TitleComponent from '@components/Text/TitleComponent.vue'

describe('<TitleComponent />', () => {
  it('Should render "IP Addres Tracker" title', () => {
    const wrapper = mount(TitleComponent)
    const title = wrapper.html()

    expect(title).toContain('IP Addres Tracker')
  })
})
