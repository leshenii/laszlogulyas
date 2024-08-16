export default function sitemap() {
    return [
        {
            url: 'https://laszlogulyas.hu',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://laszlogulyas.hu/#home',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://laszlogulyas.hu/#studies',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://laszlogulyas.hu/#projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: 'https://laszlogulyas.hu/#contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.1,
        }
    ]
}