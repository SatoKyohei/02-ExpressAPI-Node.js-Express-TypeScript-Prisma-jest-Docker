
module.exports = {
    // テストを実行するディレクトリを指定
    roots: ["<rootDir>/src"],

    // テストを行う対象ファイルの検出パターン
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",  // __tests__ディレクトリ内のテストファイル
        "**/?(*.)+(spec|test).+(ts|tsx|js)", // spec.ts, test.tsなどのファイル
    ],

    // TypeScriptのファイルをテスト可能な形式に変換
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest", // ts-jestを使ってTypeScriptをJavaScriptに変換
    },
};
