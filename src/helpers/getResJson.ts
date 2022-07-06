export function getResJson(data: any, error: boolean, errorText: string) {
    return {
        data: data ? data : null,
        error: error,
        errorText: errorText
    }
}