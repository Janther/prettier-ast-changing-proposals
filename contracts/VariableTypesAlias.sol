pragma solidity 0.5.8;

contract VariableTypesAlias {
    uint public a;
    int public b;
    byte public c;
    uint public e;
    int public f;
    byte public g;

    struct S {
        uint a;
        int b;
        byte c;
        uint e;
        int f;
        byte g;
    }

    event Event(uint _a, int _b, byte _c, uint _e, int _f, byte _g);

    function func(uint _a, int _b, byte _c, uint _e, int _f, byte _g)
        public
        returns (uint, int, byte, uint, int, byte)
    {
        emit Event(_a, _b, _c, _e, _f, _g);
        return (_a, _b, _c, _e, _f, _g);
    }
}
