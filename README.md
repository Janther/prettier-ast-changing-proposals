# Solidity Parentheses Comparison

PoC: Parentheses in Binary Operations in Solidity using Prettier JS output.

Playing around with Prettier JS, I noticed that the expression `a / b * c` would be printed as `(a / b) * c`.
This change has no repercussion in the output, but there are benefits for the developer as seeing it can uncover missing bits in case of working with integers.

However, I wouldn't attempt proposing this change in [prettier-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity) without, making sure that the cost in gas is untouched.

To my surprise, as long as the [Order of Precedence of Operators](https://solidity.readthedocs.io/en/latest/miscellaneous.html#order) is followed (which is the whole idea behind this PoC), the bytecode will be the **same**.

Here is a list of all the combinations:

| No Parentheses     | Prettier Parentheses |
| ------------------ | -------------------- |
| `a + b + c;`       | `a + b + c;`         |
| `a + b - c;`       | `a + b - c;`         |
| `a + b * c;`       | `a + b * c;`         |
| `a + b / c;`       | `a + b / c;`         |
| `a + b % c;`       | `a + (b % c);`       |
| `a + b ** c;`      | `a + b ** c;`        |
| `a + b << c;`      | `(a + b) << c;`      |
| `a + b >> c;`      | `(a + b) >> c;`      |
| `a + b & c;`       | `(a + b) & c;`       |
| `a + b \| c;`      | `(a + b) \| c;`      |
| `a + b ^ c;`       | `(a + b) ^ c;`       |
| `a - b + c;`       | `a - b + c;`         |
| `a - b - c;`       | `a - b - c;`         |
| `a - b * c;`       | `a - b * c;`         |
| `a - b / c;`       | `a - b / c;`         |
| `a - b % c;`       | `a - (b % c);`       |
| `a - b ** c;`      | `a - b ** c;`        |
| `a - b << c;`      | `(a - b) << c;`      |
| `a - b >> c;`      | `(a - b) >> c;`      |
| `a - b & c;`       | `(a - b) & c;`       |
| `a - b \| c;`      | `(a - b) \| c;`      |
| `a - b ^ c;`       | `(a - b) ^ c;`       |
| `a * b + c;`       | `a * b + c;`         |
| `a * b - c;`       | `a * b - c;`         |
| `a * b * c;`       | `a * b * c;`         |
| `a * b / c;`       | `(a * b) / c;`       |
| `a * b % c;`       | `(a * b) % c;`       |
| `a * b ** c;`      | `a * b ** c;`        |
| `a * b << c;`      | `(a * b) << c;`      |
| `a * b >> c;`      | `(a * b) >> c;`      |
| `a * b & c;`       | `(a * b) & c;`       |
| `a * b \| c;`      | `(a * b) \| c;`      |
| `a * b ^ c;`       | `(a * b) ^ c;`       |
| `a / b + c;`       | `a / b + c;`         |
| `a / b - c;`       | `a / b - c;`         |
| `a / b * c;`       | `(a / b) * c;`       |
| `a / b / c;`       | `a / b / c;`         |
| `a / b % c;`       | `(a / b) % c;`       |
| `a / b ** c;`      | `a / b ** c;`        |
| `a / b << c;`      | `(a / b) << c;`      |
| `a / b >> c;`      | `(a / b) >> c;`      |
| `a / b & c;`       | `(a / b) & c;`       |
| `a / b \| c;`      | `(a / b) \| c;`      |
| `a / b ^ c;`       | `(a / b) ^ c;`       |
| `a % b + c;`       | `(a % b) + c;`       |
| `a % b - c;`       | `(a % b) - c;`       |
| `a % b * c;`       | `(a % b) * c;`       |
| `a % b / c;`       | `(a % b) / c;`       |
| `a % b % c;`       | `(a % b) % c;`       |
| `a % b ** c;`      | `a % b ** c;`        |
| `a % b << c;`      | `a % b << c;`        |
| `a % b >> c;`      | `a % b >> c;`        |
| `a % b & c;`       | `a % b & c;`         |
| `a % b \| c;`      | `a % b \| c;`        |
| `a % b ^ c;`       | `a % b ^ c;`         |
| `a ** b + c;`      | `a ** b + c;`        |
| `a ** b - c;`      | `a ** b - c;`        |
| `a ** b * c;`      | `a ** b * c;`        |
| `a ** b / c;`      | `a ** b / c;`        |
| `a ** b % c;`      | `a ** b % c;`        |
| `a ** b ** c;`     | `a ** (b ** c);`     |
| `a ** b << c;`     | `(a ** b) << c;`     |
| `a ** b >> c;`     | `(a ** b) >> c;`     |
| `a ** b & c;`      | `(a ** b) & c;`      |
| `a ** b \| c;`     | `(a ** b) \| c;`     |
| `a ** b ^ c;`      | `(a ** b) ^ c;`      |
| `a << b + c;`      | `a << (b + c);`      |
| `a << b - c;`      | `a << (b - c);`      |
| `a << b * c;`      | `a << (b * c);`      |
| `a << b / c;`      | `a << (b / c);`      |
| `a << b % c;`      | `a << b % c;`        |
| `a << b ** c;`     | `a << (b ** c);`     |
| `a << b << c;`     | `(a << b) << c;`     |
| `a << b >> c;`     | `(a << b) >> c;`     |
| `a << b & c;`      | `(a << b) & c;`      |
| `a << b \| c;`     | `(a << b) \| c;`     |
| `a << b ^ c;`      | `(a << b) ^ c;`      |
| `a >> b + c;`      | `a >> (b + c);`      |
| `a >> b - c;`      | `a >> (b - c);`      |
| `a >> b * c;`      | `a >> (b * c);`      |
| `a >> b / c;`      | `a >> (b / c);`      |
| `a >> b % c;`      | `a >> b % c;`        |
| `a >> b ** c;`     | `a >> (b ** c);`     |
| `a >> b << c;`     | `(a >> b) << c;`     |
| `a >> b >> c;`     | `(a >> b) >> c;`     |
| `a >> b & c;`      | `(a >> b) & c;`      |
| `a >> b \| c;`     | `(a >> b) \| c;`     |
| `a >> b ^ c;`      | `(a >> b) ^ c;`      |
| `a & b + c;`       | `a & (b + c);`       |
| `a & b - c;`       | `a & (b - c);`       |
| `a & b * c;`       | `a & (b * c);`       |
| `a & b / c;`       | `a & (b / c);`       |
| `a & b % c;`       | `a & b % c;`         |
| `a & b ** c;`      | `a & (b ** c);`      |
| `a & b << c;`      | `a & (b << c);`      |
| `a & b >> c;`      | `a & (b >> c);`      |
| `a & b & c;`       | `a & b & c;`         |
| `a & b \| c;`      | `(a & b) \| c;`      |
| `a & b ^ c;`       | `(a & b) ^ c;`       |
| `a \| b + c;`      | `a \| (b + c);`      |
| `a \| b - c;`      | `a \| (b - c);`      |
| `a \| b * c;`      | `a \| (b * c);`      |
| `a \| b / c;`      | `a \| (b / c);`      |
| `a \| b % c;`      | `a \| b % c;`        |
| `a \| b ** c;`     | `a \| (b ** c);`     |
| `a \| b << c;`     | `a \| (b << c);`     |
| `a \| b >> c;`     | `a \| (b >> c);`     |
| `a \| b & c;`      | `a \| (b & c);`      |
| `a \| b \| c;`     | `a \| b \| c;`       |
| `a \| b ^ c;`      | `a \| (b ^ c);`      |
| `a ^ b + c;`       | `a ^ (b + c);`       |
| `a ^ b - c;`       | `a ^ (b - c);`       |
| `a ^ b * c;`       | `a ^ (b * c);`       |
| `a ^ b / c;`       | `a ^ (b / c);`       |
| `a ^ b % c;`       | `a ^ b % c;`         |
| `a ^ b ** c;`      | `a ^ (b ** c);`      |
| `a ^ b << c;`      | `a ^ (b << c);`      |
| `a ^ b >> c;`      | `a ^ (b >> c);`      |
| `a ^ b & c;`       | `a ^ (b & c);`       |
| `a ^ b \| c;`      | `(a ^ b) \| c;`      |
| `a ^ b ^ c;`       | `a ^ b ^ c;`         |
| `a \|\| b \|\| c;` | `a \|\| b \|\| c;`   |
| `a \|\| b && c;`   | `a \|\| (b && c);`   |
| `a && b \|\| c;`   | `(a && b) \|\| c;`   |
| `a && b && c;`     | `a && b && c;`       |
