# Explicit Variable Type.

As described in the [documentation](https://solidity.readthedocs.io/en/latest/types.html), `int` and `uint` are aliases for `int256` and `uint256` respectively.

This project contains tests that prove that, any combination of declarations and uses of these types will generate the same bytecode.
Thus Prettier can enforce the use of Explicit types across the project.

## Warning

Before `v0.8.0`, `byte` was an alias for `bytes1` but it has been removed.

# Parentheses

Playing around with Prettier JS, I noticed that the expression `a / b * c` would be printed as `(a / b) * c`.
This change has no repercussion in the output, but there are benefits for the developer as seeing it can uncover missing bits in case of working with integers.

However, I wouldn't attempt proposing this change in [prettier-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity) without, making sure that the cost in gas is untouched.

To my surprise, as long as the [Order of Precedence of Operators](https://solidity.readthedocs.io/en/latest/miscellaneous.html#order) is followed (which is the whole idea behind this PoC), the bytecode will be the **same**.

## Warning

Since `v0.8.0` Solidity is parsing `a ** b ** c;` as `a ** (b ** c);` previous versions would parse it as `(a ** b) ** c;`.

# Run the tests

I've kept all of the tests made before comming up with just comparing the bytecode.

To run the tests, juts type:

```Bash
npm test
```

# Proposed Changes

Here is a list of all the combinations and their changes:

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
