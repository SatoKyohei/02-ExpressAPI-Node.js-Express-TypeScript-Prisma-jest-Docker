import { spawn } from "child_process";

export default async function () {

    // テスト環境の場合のみ実行
    if (process.env.NODE_ENV === "test") {

        // Prismaのマイグレーションをリセット
        await new Promise((resolve, reject) => {

            // Prismaコマンドを子プロセスとして実行
            const process = spawn("prisma", [
                "migrate",  // マイグレーション
                "reset",  // DBをリセット
                "--force",  // 確認プロンプトをスキップ
                "--skip-generate",  // クライアント再生成をスキップ
                "--skip-seed",  // シードデータの投入をスキップ
            ]);

            // プロセス完了時の処理
            process.on("close", (code) => {
                if (code === 0) {
                    resolve(0);  // 成功
                } else {
                    reject(code);  // エラー
                }
            });
        });
    }
}
