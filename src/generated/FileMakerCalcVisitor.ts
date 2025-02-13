// Generated from FileMakerCalc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LiteralExprContext } from "./FileMakerCalcParser";
import { FieldExprContext } from "./FileMakerCalcParser";
import { LetExprContext } from "./FileMakerCalcParser";
import { FunctionExprContext } from "./FileMakerCalcParser";
import { GlobalVarExprContext } from "./FileMakerCalcParser";
import { LocalVarExprContext } from "./FileMakerCalcParser";
import { VariableExprContext } from "./FileMakerCalcParser";
import { ParenExprContext } from "./FileMakerCalcParser";
import { RepetitionExprContext } from "./FileMakerCalcParser";
import { ArrayNotationExprContext } from "./FileMakerCalcParser";
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
import { JsonConstantLiteralContext } from "./FileMakerCalcParser";
import { CalculationContext } from "./FileMakerCalcParser";
import { ExpressionContext } from "./FileMakerCalcParser";
import { LetFunctionContext } from "./FileMakerCalcParser";
import { VariableDeclarationContext } from "./FileMakerCalcParser";
import { FunctionCallContext } from "./FileMakerCalcParser";
import { ArgumentListContext } from "./FileMakerCalcParser";
import { ArrayNotationContext } from "./FileMakerCalcParser";
import { FieldReferenceContext } from "./FileMakerCalcParser";
import { LiteralContext } from "./FileMakerCalcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FileMakerCalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FileMakerCalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `FieldExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldExpr?: (ctx: FieldExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LetExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetExpr?: (ctx: LetExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpr?: (ctx: FunctionExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `GlobalVarExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalVarExpr?: (ctx: GlobalVarExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LocalVarExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVarExpr?: (ctx: LocalVarExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `VariableExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableExpr?: (ctx: VariableExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `RepetitionExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepetitionExpr?: (ctx: RepetitionExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayNotationExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayNotationExpr?: (ctx: ArrayNotationExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConcatenationExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenationExpr?: (ctx: ConcatenationExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ComparisonExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpr?: (ctx: ComparisonExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpr?: (ctx: NotExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrExpr`
	 * labeled alternative in `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumberLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `JsonConstantLiteral`
	 * labeled alternative in `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsonConstantLiteral?: (ctx: JsonConstantLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.calculation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculation?: (ctx: CalculationContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.letFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetFunction?: (ctx: LetFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.arrayNotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayNotation?: (ctx: ArrayNotationContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.fieldReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldReference?: (ctx: FieldReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `FileMakerCalcParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
}

