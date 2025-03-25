(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a4bdc65c._.js", {

"[project]/src/data/surveys.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "surveys": (()=>surveys)
});
const surveys = [
    {
        id: 1,
        question: "블록체인을 좋아하나요?",
        options: [
            "잘 모름",
            "들어는 봤음",
            "조금 알음",
            "좋아함"
        ]
    },
    {
        id: 2,
        question: "가장 많이 사용하는 지갑은?",
        options: [
            "Metamask",
            "샤넬",
            "문방구 지갑",
            "기타"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/rewardEthUser.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "rewardEthUser": (()=>rewardEthUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const rewardEthUser = async (to)=>{
    try {
        if (!window.ethereum) {
            alert("Metamask not installed");
            return;
        }
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
        // 지갑 연결 및 signer 설정
        const accounts = await provider.send("eth_requestAccounts", []);
        const sender = accounts[0];
        const signer = await provider.getSigner(sender);
        // 보상 금액 (예: 0.01 ETH)
        const rewardAmount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther("0.01"); // 0.01 ETH
        // 보상자 ETH 잔액 확인
        const ethBalance = await provider.getBalance(sender);
        console.log("보상자:", sender);
        console.log("보상 대상:", to);
        console.log("보상자 ETH 잔액:", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatEther(ethBalance));
        if (ethBalance < rewardAmount) {
            alert("보상자 ETH 잔액 부족");
            return;
        }
        // ETH 전송 트랜잭션
        const tx = await signer.sendTransaction({
            to,
            value: rewardAmount
        });
        await tx.wait();
        await fetch("http://localhost:4000/api/reward-log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: sender,
                to,
                amount: "10 RTK",
                channel: "디자인 채널",
                timestamp: new Date().toISOString()
            })
        });
        alert("🎉 ETH 보상 지급 완료!");
    } catch (err) {
        console.error("보상 지급 실패", err);
        alert("보상 지급 실패: " + (err?.reason || err?.message || "Unknown error"));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/survey/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SurveyPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/surveys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$rewardEthUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/rewardEthUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SurveyPage() {
    _s();
    const [selectedSurvey, setSelectedSurvey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const connectWallet = async ()=>{
        if (typeof window.ethereum !== "undefined") {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            setAccount(accounts[0]);
        }
    };
    const handleSubmit = async ()=>{
        if (!selectedOption || selectedSurvey === null || !account) return;
        // ✅ 설문 응답 저장 + 보상 지급
        await fetch("http://localhost:4000/api/reward-log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "Survey System",
                to: account,
                amount: "10 RTK",
                channel: `설문 ${selectedSurvey}`,
                timestamp: new Date().toISOString()
            })
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$rewardEthUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rewardEthUser"])(account);
        alert("설문 응답 완료 및 보상 지급!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "설문 참여"
            }, void 0, false, {
                fileName: "[project]/app/survey/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            !account ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: connectWallet,
                children: "🦊 Metamask 연결"
            }, void 0, false, {
                fileName: "[project]/app/survey/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: [
                            "지갑 주소: ",
                            account
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/survey/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveys"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 border p-4 rounded",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-semibold mb-2",
                                    children: s.question
                                }, void 0, false, {
                                    fileName: "[project]/app/survey/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                s.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                name: `survey-${s.id}`,
                                                value: opt,
                                                onChange: ()=>{
                                                    setSelectedSurvey(s.id);
                                                    setSelectedOption(opt);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            opt
                                        ]
                                    }, opt, true, {
                                        fileName: "[project]/app/survey/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, s.id, true, {
                            fileName: "[project]/app/survey/page.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded",
                        children: "제출하고 보상받기"
                    }, void 0, false, {
                        fileName: "[project]/app/survey/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/survey/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(SurveyPage, "SbPhU5RztSg2qId0a1WORAtc/Kg=");
_c = SurveyPage;
var _c;
__turbopack_context__.k.register(_c, "SurveyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a4bdc65c._.js.map