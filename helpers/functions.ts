const scrollTo = (path: string): void => {
    document.getElementById(path)?.scrollIntoView()
}

export {
    scrollTo
}