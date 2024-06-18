export const NAVIGATION_ROUTES = {
    expertise: '/expertise',
    'our vision': '/vision',
    careers: '/careers',
} as const

export const ROUTES = {
    home: '/',
    ...NAVIGATION_ROUTES,
} as const
