function compress(chars: string[]): number {
    let index = 0;
    let count = 1;
    const charCountMap = new Map<string, number>();

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else {
            chars[index++] = chars[i];
            charCountMap.set(chars[i], count);
            if (count > 1) {
                const countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    chars[index++] = countStr[j];
                }
            }
            count = 1;
        }
    }

    return index;
}

const input = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
const compressedSize = compress(input);
console.log(input.slice(0, compressedSize)); // Output: ["a", "1", "b", "1", "2"]
