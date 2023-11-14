import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import JobsIndex from './index.vue'

describe('JobsIndex', () => {
    test('renders the component', () => {
        const wrapper = mount(JobsIndex)
        expect(wrapper.exists()).toBe(true)
    })
})
