const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
export default function rankToFile(input: number) {
    if (input == 1) {
        return letters[0]
    } else if (input == 8) {
        return letters[7]
    } else {
        return letters[input - 1]
    }
}