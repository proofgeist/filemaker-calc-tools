// Generated from FileMakerCalc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralExprContext } from "./FileMakerCalcParser";
import { FieldExprContext } from "./FileMakerCalcParser";
import { FunctionExprContext } from "./FileMakerCalcParser";
import { ParenExprContext } from "./FileMakerCalcParser";
import { RepetitionExprContext } from "./FileMakerCalcParser";
import { MultiplicativeExprContext } from "./FileMakerCalcParser";
import { AdditiveExprContext } from "./FileMakerCalcParser";
import { ConcatenationExprContext } from "./FileMakerCalcParser";
import { ComparisonExprContext } from "./FileMakerCalcParser";
import { NotExprContext } from "./FileMakerCalcParser";
import { AndExprContext } from "./FileMakerCalcParser";
import { OrExprContext } from "./FileMakerCalcParser";
import { NumberLiteralContext } from "./FileMakerCalcParser";
import { StringLiteralContext } from "./FileMakerCalcParser";
import { BooleanLiteralContext } from "./FileMakerCalcParser";
import { CalculationContext } from "./FileMakerCalcParser";
import { ExpressionContext } from "./FileMakerCalcParser";
import { FunctionCallContext } from "./FileMakerCalcParser";
import { ArgumentListContext } from "./FileMakerCalcParser";
import { FieldReferenceContext } from "./FileMakerCalcParser";
import { LiteralContext } from "./FileMakerCalcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FileMakerCalcParser`.
 */
export interface FileMakerCalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `FieldExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFieldExpr?: (ctx: FieldExprContext) => void;
	/**
	 * Exit a parse tree produced by the `FieldExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFieldExpr?: (ctx: FieldExprContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpr?: (ctx: FunctionExprContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpr?: (ctx: FunctionExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenExpr?: (ctx: ParenExprContext) => void;

	/**
	 * Enter a parse tree produced by the `RepetitionExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRepetitionExpr?: (ctx: RepetitionExprContext) => void;
	/**
	 * Exit a parse tree produced by the `RepetitionExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRepetitionExpr?: (ctx: RepetitionExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpr?: (ctx: AdditiveExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpr?: (ctx: AdditiveExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ConcatenationExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConcatenationExpr?: (ctx: ConcatenationExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ConcatenationExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConcatenationExpr?: (ctx: ConcatenationExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ComparisonExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterComparisonExpr?: (ctx: ComparisonExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ComparisonExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitComparisonExpr?: (ctx: ComparisonExprContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotExpr?: (ctx: NotExprContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotExpr?: (ctx: NotExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AndExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AndExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `OrExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `OrExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `NumberLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `NumberLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNumberLiteral?: (ctx: NumberLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `StringLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `StringLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `BooleanLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FileMakerCalcParser.calculation`.
	 * @param ctx the parse tree
	 */
	enterCalculation?: (ctx: CalculationContext) => void;
	/**
	 * Exit a parse tree produced by `FileMakerCalcParser.calculation`.
	 * @param ctx the parse tree
	 */
	exitCalculation?: (ctx: CalculationContext) => void;

	/**
	 * Enter a parse tree produced by `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FileMakerCalcParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `FileMakerCalcParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `FileMakerCalcParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `FileMakerCalcParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `FileMakerCalcParser.fieldReference`.
	 * @param ctx the parse tree
	 */
	enterFieldReference?: (ctx: FieldReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `FileMakerCalcParser.fieldReference`.
	 * @param ctx the parse tree
	 */
	exitFieldReference?: (ctx: FieldReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
}

