import React from 'react'
import { render, cleanup } from 'react-testing-library'

import ReactFavic from '../'

afterEach(cleanup)

test('ReactFavic should add meta headers', () => {
  const favicons = render(
    <ReactFavic name='Lesson Desk Head Office' color='#797979' href='static/images/meta' />
  )
  expect(favicons).toMatchSnapshot()
})
