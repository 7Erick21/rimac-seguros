export function classNames(
    ...params: Array<
        | string
        | undefined
        | Record<string, boolean | undefined>
        | [string, boolean | undefined]
    >
): string {
    return params
        .reduce<string[]>((a, v) => {
            if (typeof v === 'string') {
                a.push(v)
            }
            if (typeof v === 'object') {
                if (Array.isArray(v)) {
                    const [key, pass] = v
                    if (pass) {
                        a.push(key)
                    }
                } else {
                    for (const key in v) {
                        if (v[key]) {
                            a.push(key)
                        }
                    }
                }
            }
            return a
        }, [])
        .join(' ')
}
