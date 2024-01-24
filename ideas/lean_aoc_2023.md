# Advent of Code 2023 with Lean 4

Last year was the first time I finished Advent of Code, maybe it will be the last. This year I saw this as an opportunity to wite some Lean. I chose Lean for the same reason I chose Rust last year and Julia the year before. It is new and therefore must be better that whatever I was using before, human progress is a unassailable march forward.

On a more serious note, Lean has several compelling arguments for its adoption:
1. It is a functional language, and comes with all the niceties: inductive types, first class functions, do notation, etc. It also has a very powerful dependant type system, which you may not have come across before
2. The reason it has a dependant type system is that it is also a theorem prover, and it is already being used by mathematicians, watch [this talk](https://www.youtube.com/watch?v=Dp-mQ3HxgDE) to understand why. Languages live and die by their community, and Leans core user base is large enough and invested enough for me to be confident it won't disappear tomorrow.
2. It has memory management that promises to be both performant and more predictable. It seems to use a mixture of reference counting and in-place mutation, but takes advantage of the constraints of a pure functional language to apply novel optimizations.
[lean4 intro](https://lean-lang.org/papers/lean4.pdf)
[perceusu](https://www.microsoft.com/en-us/research/uploads/prod/2020/11/perceus-tr-v1.pdf)

3. The VS Code extension is a revelation to me, you really have to try it to see why

# Advent of Code

