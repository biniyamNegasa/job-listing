// __mocks__/next/navigation.ts
export const useRouter = jest.fn()

// Mock implementation if needed
useRouter.mockReturnValue({
  push: jest.fn(),
  replace: jest.fn(),
  pathname: '/',
  query: {},
  asPath: '/',
  back: jest.fn(),
})
