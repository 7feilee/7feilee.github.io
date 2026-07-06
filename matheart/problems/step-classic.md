# STEP 名题精讲：一个积分的妙解

> 这道题是名校笔试与大学面试的常客。它完美展示了 STEP 想要的东西：
> **不是更难的技巧，而是更聪明的视角。**

## 题目

求证：

$$\int_0^{\pi/4} \ln(1+\tan x)\,\mathrm{d}x \;=\; \frac{\pi}{8}\ln 2$$

## 第一反应（以及它为什么走不通）

大多数学生的第一反应是硬来：分部积分？把 $\ln(1+\tan x)$ 展开？
试五分钟就会发现——原函数根本写不出初等形式。**这正是出题人的设计**：
这道题在告诉你，"求出原函数"不是唯一的路。

## 关键观察

积分区间 $[0, \pi/4]$ 有一个天然的对称操作：代换 $x \mapsto \dfrac{\pi}{4} - x$。
它把区间映回自身。那么被积函数会变成什么？

$$1+\tan\left(\frac{\pi}{4}-x\right) = 1+\frac{1-\tan x}{1+\tan x} = \frac{2}{1+\tan x}$$

**这一步是全题的灵魂**：$1+\tan x$ 在这个代换下几乎是"自我对偶"的。

## 完整证明

设 $I = \displaystyle\int_0^{\pi/4} \ln(1+\tan x)\,\mathrm{d}x$。作代换 $u = \dfrac{\pi}{4} - x$（则 $\mathrm{d}u = -\mathrm{d}x$，上下限交换）：

$$I = \int_0^{\pi/4} \ln\!\left(1+\tan\left(\frac{\pi}{4}-u\right)\right)\mathrm{d}u = \int_0^{\pi/4} \ln\frac{2}{1+\tan u}\,\mathrm{d}u$$

把对数拆开：

$$I = \int_0^{\pi/4} \ln 2\,\mathrm{d}u - \int_0^{\pi/4} \ln(1+\tan u)\,\mathrm{d}u = \frac{\pi}{4}\ln 2 - I$$

于是 $2I = \dfrac{\pi}{4}\ln 2$，即

$$I = \frac{\pi}{8}\ln 2 \qquad \blacksquare$$

## 这道题在考什么

1. **路径判断力**：意识到"求原函数"不可行，需要换武器——这个判断本身就是能力
2. **对称性直觉**：$\int_0^a f(x)\,\mathrm{d}x = \int_0^a f(a-x)\,\mathrm{d}x$ 这个恒等式人人都"学过"，但只有真正理解的人会在这里**想起它**
3. **代数勇气**：算 $\tan(\pi/4 - x)$ 那一步，很多学生算到一半觉得"越来越乱"就放弃了——再走一步，海阔天空

## 举一反三

用同样的思想试试这道（提示：对称点在 $\pi/2$）：

$$\int_0^{\pi/2} \frac{\sin x}{\sin x + \cos x}\,\mathrm{d}x = \;?$$

<details>
<summary>点击看答案</summary>

代换 $x \mapsto \frac{\pi}{2}-x$ 把 $\sin$ 与 $\cos$ 互换，两式相加得 $\int_0^{\pi/2} 1\,\mathrm{d}x = \frac{\pi}{2}$，故原积分为 $\dfrac{\pi}{4}$。

</details>

---

> 📩 **想每周收到一道这样讲透的名题？**
> 加微信 **Essay521520**（备注"名题"），免费加入名题精讲推送。
