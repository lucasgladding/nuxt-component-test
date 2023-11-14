import { describe, test, expect } from 'vitest'
import { setup } from '@nuxt/test-utils'
import { mount } from '@vue/test-utils'

import JobsIndex from './index.vue'

describe('JobsIndex', async () => {
    await setup()

    test('renders the component', () => {
        const wrapper = mount(JobsIndex)
        expect(wrapper.exists()).toBe(true)
    })
})
