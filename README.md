# Explicit Variable Type.

As described in the [documentation](https://solidity.readthedocs.io/en/latest/types.html), `int`,`uint`, and `byte` are aliases for `int256`,`uint256`, and `bytes1` respectively.

This project contains tests that prove that, any combination of declarations and uses of these types will generate the same bytecode.
Thus Prettier can enforce the use of Explicit types across the project.

This feature was added to the plugin at version `1.0.0-alpha.27`.

# Parentheses

Playing around with Prettier JS, I noticed that the expression `a / b * c` would be printed as `(a / b) * c`.
This change has no repercussion in the output, but there are benefits for the developer as seeing it can uncover missing bits in case of working with integers.

However, I wouldn't attempt proposing this change in [prettier-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity) without, making sure that the cost in gas is untouched.

To my surprise, as long as the [Order of Precedence of Operators](https://solidity.readthedocs.io/en/latest/miscellaneous.html#order) is followed (which is the whole idea behind this PoC), the bytecode will be the **same**.

# Run the tests

I've kept all of the tests made before thinking that I could just compare the bytecode.

To run the tests, juts type:

```Bash
npm test
```

## Warning

As you can see there are 2 pending tests. This is because Ganache likes to [crash](https://github.com/trufflesuite/ganache-cli/issues/575) on `a ** b ** c;`.

Also in Prettier JS prints `a ** b ** c;` like `a ** (b ** c);` which is false in Solidity.

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
| `a ** b ** c;`     | `(a ** b) ** c;`     |
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
