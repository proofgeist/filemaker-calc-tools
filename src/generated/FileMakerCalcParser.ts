// Generated from FileMakerCalc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FileMakerCalcListener } from "./FileMakerCalcListener";
import { FileMakerCalcVisitor } from "./FileMakerCalcVisitor";


export class FileMakerCalcParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly AND = 18;
	public static readonly OR = 19;
	public static readonly NOT = 20;
	public static readonly LET = 21;
	public static readonly BOOLEAN = 22;
	public static readonly NUMBER = 23;
	public static readonly STRING = 24;
	public static readonly GLOBAL_VAR = 25;
	public static readonly LOCAL_VAR = 26;
	public static readonly IDENTIFIER = 27;
	public static readonly BLOCK_COMMENT = 28;
	public static readonly LINE_COMMENT = 29;
	public static readonly WS = 30;
	public static readonly JSON_CONSTANT = 31;
	public static readonly RULE_calculation = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_letFunction = 2;
	public static readonly RULE_variableDeclaration = 3;
	public static readonly RULE_functionCall = 4;
	public static readonly RULE_argumentList = 5;
	public static readonly RULE_arrayNotation = 6;
	public static readonly RULE_fieldReference = 7;
	public static readonly RULE_literal = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"calculation", "expression", "letFunction", "variableDeclaration", "functionCall", 
		"argumentList", "arrayNotation", "fieldReference", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'['", "']'", "';'", "'*'", "'/'", "'+'", "'-'", 
		"'&'", "'='", "'\u2260'", "'<'", "'>'", "'\u2264'", "'\u2265'", "'::'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "AND", "OR", "NOT", "LET", 
		"BOOLEAN", "NUMBER", "STRING", "GLOBAL_VAR", "LOCAL_VAR", "IDENTIFIER", 
		"BLOCK_COMMENT", "LINE_COMMENT", "WS", "JSON_CONSTANT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FileMakerCalcParser._LITERAL_NAMES, FileMakerCalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FileMakerCalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FileMakerCalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return FileMakerCalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FileMakerCalcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FileMakerCalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public calculation(): CalculationContext {
		let _localctx: CalculationContext = new CalculationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FileMakerCalcParser.RULE_calculation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.expression(0);
			this.state = 19;
			this.match(FileMakerCalcParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, FileMakerCalcParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 22;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new FieldExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 23;
				this.fieldReference();
				}
				break;

			case 3:
				{
				_localctx = new LetExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 24;
				this.letFunction();
				}
				break;

			case 4:
				{
				_localctx = new FunctionExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 25;
				this.functionCall();
				}
				break;

			case 5:
				{
				_localctx = new GlobalVarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 26;
				this.match(FileMakerCalcParser.GLOBAL_VAR);
				}
				break;

			case 6:
				{
				_localctx = new LocalVarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 27;
				this.match(FileMakerCalcParser.LOCAL_VAR);
				}
				break;

			case 7:
				{
				_localctx = new VariableExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 28;
				this.match(FileMakerCalcParser.IDENTIFIER);
				}
				break;

			case 8:
				{
				_localctx = new ParenExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 29;
				this.match(FileMakerCalcParser.T__0);
				this.state = 30;
				this.expression(0);
				this.state = 31;
				this.match(FileMakerCalcParser.T__1);
				}
				break;

			case 9:
				{
				_localctx = new ArrayNotationExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 33;
				this.match(FileMakerCalcParser.T__2);
				this.state = 34;
				this.expression(0);
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 35;
					this.match(FileMakerCalcParser.T__4);
					this.state = 36;
					this.expression(0);
					}
					}
					this.state = 39;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FileMakerCalcParser.T__4);
				this.state = 41;
				this.match(FileMakerCalcParser.T__3);
				}
				break;

			case 10:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 43;
				this.match(FileMakerCalcParser.NOT);
				this.state = 44;
				this.expression(3);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 72;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 70;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FileMakerCalcParser.RULE_expression);
						this.state = 47;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 48;
						(_localctx as MultiplicativeExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FileMakerCalcParser.T__5 || _la === FileMakerCalcParser.T__6)) {
							(_localctx as MultiplicativeExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 49;
						this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FileMakerCalcParser.RULE_expression);
						this.state = 50;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 51;
						(_localctx as AdditiveExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FileMakerCalcParser.T__7 || _la === FileMakerCalcParser.T__8)) {
							(_localctx as AdditiveExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 52;
						this.expression(7);
						}
						break;

					case 3:
						{
						_localctx = new ConcatenationExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FileMakerCalcParser.RULE_expression);
						this.state = 53;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 54;
						this.match(FileMakerCalcParser.T__9);
						this.state = 55;
						this.expression(6);
						}
						break;

					case 4:
						{
						_localctx = new ComparisonExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FileMakerCalcParser.RULE_expression);
						this.state = 56;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 57;
						(_localctx as ComparisonExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileMakerCalcParser.T__10) | (1 << FileMakerCalcParser.T__11) | (1 << FileMakerCalcParser.T__12) | (1 << FileMakerCalcParser.T__13) | (1 << FileMakerCalcParser.T__14) | (1 << FileMakerCalcParser.T__15))) !== 0))) {
							(_localctx as ComparisonExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 58;
						this.expression(5);
						}
						break;

					case 5:
						{
						_localctx = new AndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FileMakerCalcParser.RULE_expression);
						this.state = 59;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 60;
						this.match(FileMakerCalcParser.AND);
						this.state = 61;
						this.expression(3);
						}
						break;

					case 6:
						{
						_localctx = new OrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FileMakerCalcParser.RULE_expression);
						this.state = 62;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 63;
						this.match(FileMakerCalcParser.OR);
						this.state = 64;
						this.expression(2);
						}
						break;

					case 7:
						{
						_localctx = new RepetitionExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FileMakerCalcParser.RULE_expression);
						this.state = 65;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 66;
						this.match(FileMakerCalcParser.T__2);
						this.state = 67;
						this.expression(0);
						this.state = 68;
						this.match(FileMakerCalcParser.T__3);
						}
						break;
					}
					}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letFunction(): LetFunctionContext {
		let _localctx: LetFunctionContext = new LetFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FileMakerCalcParser.RULE_letFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(FileMakerCalcParser.LET);
			this.state = 76;
			this.match(FileMakerCalcParser.T__0);
			this.state = 77;
			this.match(FileMakerCalcParser.T__2);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 78;
				this.variableDeclaration();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FileMakerCalcParser.IDENTIFIER);
			this.state = 83;
			this.match(FileMakerCalcParser.T__3);
			this.state = 84;
			this.match(FileMakerCalcParser.T__4);
			this.state = 85;
			this.expression(0);
			this.state = 86;
			this.match(FileMakerCalcParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FileMakerCalcParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(FileMakerCalcParser.IDENTIFIER);
			this.state = 89;
			this.match(FileMakerCalcParser.T__10);
			this.state = 90;
			this.expression(0);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FileMakerCalcParser.T__4) {
				{
				this.state = 91;
				this.match(FileMakerCalcParser.T__4);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FileMakerCalcParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(FileMakerCalcParser.IDENTIFIER);
			this.state = 95;
			this.match(FileMakerCalcParser.T__0);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FileMakerCalcParser.T__0) | (1 << FileMakerCalcParser.T__2) | (1 << FileMakerCalcParser.NOT) | (1 << FileMakerCalcParser.LET) | (1 << FileMakerCalcParser.BOOLEAN) | (1 << FileMakerCalcParser.NUMBER) | (1 << FileMakerCalcParser.STRING) | (1 << FileMakerCalcParser.GLOBAL_VAR) | (1 << FileMakerCalcParser.LOCAL_VAR) | (1 << FileMakerCalcParser.IDENTIFIER) | (1 << FileMakerCalcParser.JSON_CONSTANT))) !== 0)) {
				{
				this.state = 96;
				this.argumentList();
				}
			}

			this.state = 99;
			this.match(FileMakerCalcParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FileMakerCalcParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 101;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 102;
				this.arrayNotation();
				}
				break;
			}
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FileMakerCalcParser.T__4) {
				{
				{
				this.state = 105;
				this.match(FileMakerCalcParser.T__4);
				this.state = 108;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 106;
					this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 107;
					this.arrayNotation();
					}
					break;
				}
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayNotation(): ArrayNotationContext {
		let _localctx: ArrayNotationContext = new ArrayNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FileMakerCalcParser.RULE_arrayNotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(FileMakerCalcParser.T__2);
			this.state = 116;
			this.expression(0);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 117;
				this.match(FileMakerCalcParser.T__4);
				this.state = 118;
				this.expression(0);
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FileMakerCalcParser.T__4);
			this.state = 123;
			this.match(FileMakerCalcParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldReference(): FieldReferenceContext {
		let _localctx: FieldReferenceContext = new FieldReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FileMakerCalcParser.RULE_fieldReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(FileMakerCalcParser.IDENTIFIER);
			this.state = 126;
			this.match(FileMakerCalcParser.T__16);
			this.state = 127;
			this.match(FileMakerCalcParser.IDENTIFIER);
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 128;
				this.match(FileMakerCalcParser.T__2);
				this.state = 129;
				this.expression(0);
				this.state = 130;
				this.match(FileMakerCalcParser.T__3);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FileMakerCalcParser.RULE_literal);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FileMakerCalcParser.NUMBER:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.match(FileMakerCalcParser.NUMBER);
				}
				break;
			case FileMakerCalcParser.STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.match(FileMakerCalcParser.STRING);
				}
				break;
			case FileMakerCalcParser.BOOLEAN:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 136;
				this.match(FileMakerCalcParser.BOOLEAN);
				}
				break;
			case FileMakerCalcParser.JSON_CONSTANT:
				_localctx = new JsonConstantLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 137;
				this.match(FileMakerCalcParser.JSON_CONSTANT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);

		case 6:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\x8F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03(\n\x03\r\x03\x0E" +
		"\x03)\x03\x03\x03\x03\x03\x03\x03\x03\x05\x030\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03I\n\x03\f\x03\x0E\x03L\v\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x06\x04R\n\x04\r\x04\x0E\x04S\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05_\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x05\x06d\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07" +
		"j\n\x07\x03\x07\x03\x07\x03\x07\x05\x07o\n\x07\x07\x07q\n\x07\f\x07\x0E" +
		"\x07t\v\x07\x03\b\x03\b\x03\b\x03\b\x06\bz\n\b\r\b\x0E\b{\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x87\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\x8D\n\n\x03\n\x02\x02\x03\x04\v\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x05\x03\x02\b\t\x03\x02" +
		"\n\v\x03\x02\r\x12\x02\xA1\x02\x14\x03\x02\x02\x02\x04/\x03\x02\x02\x02" +
		"\x06M\x03\x02\x02\x02\bZ\x03\x02\x02\x02\n`\x03\x02\x02\x02\fi\x03\x02" +
		"\x02\x02\x0Eu\x03\x02\x02\x02\x10\x7F\x03\x02\x02\x02\x12\x8C\x03\x02" +
		"\x02\x02\x14\x15\x05\x04\x03\x02\x15\x16\x07\x02\x02\x03\x16\x03\x03\x02" +
		"\x02\x02\x17\x18\b\x03\x01\x02\x180\x05\x12\n\x02\x190\x05\x10\t\x02\x1A" +
		"0\x05\x06\x04\x02\x1B0\x05\n\x06\x02\x1C0\x07\x1B\x02\x02\x1D0\x07\x1C" +
		"\x02\x02\x1E0\x07\x1D\x02\x02\x1F \x07\x03\x02\x02 !\x05\x04\x03\x02!" +
		"\"\x07\x04\x02\x02\"0\x03\x02\x02\x02#$\x07\x05\x02\x02$\'\x05\x04\x03" +
		"\x02%&\x07\x07\x02\x02&(\x05\x04\x03\x02\'%\x03\x02\x02\x02()\x03\x02" +
		"\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03\x02\x02\x02+,\x07" +
		"\x06\x02\x02,0\x03\x02\x02\x02-.\x07\x16\x02\x02.0\x05\x04\x03\x05/\x17" +
		"\x03\x02\x02\x02/\x19\x03\x02\x02\x02/\x1A\x03\x02\x02\x02/\x1B\x03\x02" +
		"\x02\x02/\x1C\x03\x02\x02\x02/\x1D\x03\x02\x02\x02/\x1E\x03\x02\x02\x02" +
		"/\x1F\x03\x02\x02\x02/#\x03\x02\x02\x02/-\x03\x02\x02\x020J\x03\x02\x02" +
		"\x0212\f\t\x02\x0223\t\x02\x02\x023I\x05\x04\x03\n45\f\b\x02\x0256\t\x03" +
		"\x02\x026I\x05\x04\x03\t78\f\x07\x02\x0289\x07\f\x02\x029I\x05\x04\x03" +
		"\b:;\f\x06\x02\x02;<\t\x04\x02\x02<I\x05\x04\x03\x07=>\f\x04\x02\x02>" +
		"?\x07\x14\x02\x02?I\x05\x04\x03\x05@A\f\x03\x02\x02AB\x07\x15\x02\x02" +
		"BI\x05\x04\x03\x04CD\f\v\x02\x02DE\x07\x05\x02\x02EF\x05\x04\x03\x02F" +
		"G\x07\x06\x02\x02GI\x03\x02\x02\x02H1\x03\x02\x02\x02H4\x03\x02\x02\x02" +
		"H7\x03\x02\x02\x02H:\x03\x02\x02\x02H=\x03\x02\x02\x02H@\x03\x02\x02\x02" +
		"HC\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"K\x05\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\x17\x02\x02NO\x07\x03\x02" +
		"\x02OQ\x07\x05\x02\x02PR\x05\b\x05\x02QP\x03\x02\x02\x02RS\x03\x02\x02" +
		"\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x07\x06\x02" +
		"\x02VW\x07\x07\x02\x02WX\x05\x04\x03\x02XY\x07\x04\x02\x02Y\x07\x03\x02" +
		"\x02\x02Z[\x07\x1D\x02\x02[\\\x07\r\x02\x02\\^\x05\x04\x03\x02]_\x07\x07" +
		"\x02\x02^]\x03\x02\x02\x02^_\x03\x02\x02\x02_\t\x03\x02\x02\x02`a\x07" +
		"\x1D\x02\x02ac\x07\x03\x02\x02bd\x05\f\x07\x02cb\x03\x02\x02\x02cd\x03" +
		"\x02\x02\x02de\x03\x02\x02\x02ef\x07\x04\x02\x02f\v\x03\x02\x02\x02gj" +
		"\x05\x04\x03\x02hj\x05\x0E\b\x02ig\x03\x02\x02\x02ih\x03\x02\x02\x02j" +
		"r\x03\x02\x02\x02kn\x07\x07\x02\x02lo\x05\x04\x03\x02mo\x05\x0E\b\x02" +
		"nl\x03\x02\x02\x02nm\x03\x02\x02\x02oq\x03\x02\x02\x02pk\x03\x02\x02\x02" +
		"qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02s\r\x03\x02\x02" +
		"\x02tr\x03\x02\x02\x02uv\x07\x05\x02\x02vy\x05\x04\x03\x02wx\x07\x07\x02" +
		"\x02xz\x05\x04\x03\x02yw\x03\x02\x02\x02z{\x03\x02\x02\x02{y\x03\x02\x02" +
		"\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x07\x06\x02\x02~\x0F\x03\x02" +
		"\x02\x02\x7F\x80\x07\x1D\x02\x02\x80\x81\x07\x13\x02\x02\x81\x86\x07\x1D" +
		"\x02\x02\x82\x83\x07\x05\x02\x02\x83\x84\x05\x04\x03\x02\x84\x85\x07\x06" +
		"\x02\x02\x85\x87\x03\x02\x02\x02\x86\x82\x03\x02\x02\x02\x86\x87\x03\x02" +
		"\x02\x02\x87\x11\x03\x02\x02\x02\x88\x8D\x07\x19\x02\x02\x89\x8D\x07\x1A" +
		"\x02\x02\x8A\x8D\x07\x18\x02\x02\x8B\x8D\x07!\x02\x02\x8C\x88\x03\x02" +
		"\x02\x02\x8C\x89\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02" +
		"\x02\x02\x8D\x13\x03\x02\x02\x02\x0F)/HJS^cinr{\x86\x8C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FileMakerCalcParser.__ATN) {
			FileMakerCalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FileMakerCalcParser._serializedATN));
		}

		return FileMakerCalcParser.__ATN;
	}

}

export class CalculationContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(FileMakerCalcParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_calculation; }
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterCalculation) {
			listener.enterCalculation(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitCalculation) {
			listener.exitCalculation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitCalculation) {
			return visitor.visitCalculation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExprContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FieldExprContext extends ExpressionContext {
	public fieldReference(): FieldReferenceContext {
		return this.getRuleContext(0, FieldReferenceContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterFieldExpr) {
			listener.enterFieldExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitFieldExpr) {
			listener.exitFieldExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitFieldExpr) {
			return visitor.visitFieldExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetExprContext extends ExpressionContext {
	public letFunction(): LetFunctionContext {
		return this.getRuleContext(0, LetFunctionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterLetExpr) {
			listener.enterLetExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitLetExpr) {
			listener.exitLetExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitLetExpr) {
			return visitor.visitLetExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionExprContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterFunctionExpr) {
			listener.enterFunctionExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitFunctionExpr) {
			listener.exitFunctionExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitFunctionExpr) {
			return visitor.visitFunctionExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GlobalVarExprContext extends ExpressionContext {
	public GLOBAL_VAR(): TerminalNode { return this.getToken(FileMakerCalcParser.GLOBAL_VAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterGlobalVarExpr) {
			listener.enterGlobalVarExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitGlobalVarExpr) {
			listener.exitGlobalVarExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitGlobalVarExpr) {
			return visitor.visitGlobalVarExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalVarExprContext extends ExpressionContext {
	public LOCAL_VAR(): TerminalNode { return this.getToken(FileMakerCalcParser.LOCAL_VAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterLocalVarExpr) {
			listener.enterLocalVarExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitLocalVarExpr) {
			listener.exitLocalVarExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitLocalVarExpr) {
			return visitor.visitLocalVarExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableExprContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FileMakerCalcParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterVariableExpr) {
			listener.enterVariableExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitVariableExpr) {
			listener.exitVariableExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitVariableExpr) {
			return visitor.visitVariableExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExprContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterParenExpr) {
			listener.enterParenExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitParenExpr) {
			listener.exitParenExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitParenExpr) {
			return visitor.visitParenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepetitionExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterRepetitionExpr) {
			listener.enterRepetitionExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitRepetitionExpr) {
			listener.exitRepetitionExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitRepetitionExpr) {
			return visitor.visitRepetitionExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayNotationExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterArrayNotationExpr) {
			listener.enterArrayNotationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitArrayNotationExpr) {
			listener.exitArrayNotationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitArrayNotationExpr) {
			return visitor.visitArrayNotationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterMultiplicativeExpr) {
			listener.enterMultiplicativeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitMultiplicativeExpr) {
			listener.exitMultiplicativeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpr) {
			return visitor.visitMultiplicativeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterAdditiveExpr) {
			listener.enterAdditiveExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitAdditiveExpr) {
			listener.exitAdditiveExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitAdditiveExpr) {
			return visitor.visitAdditiveExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatenationExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterConcatenationExpr) {
			listener.enterConcatenationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitConcatenationExpr) {
			listener.exitConcatenationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitConcatenationExpr) {
			return visitor.visitConcatenationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterComparisonExpr) {
			listener.enterComparisonExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitComparisonExpr) {
			listener.exitComparisonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitComparisonExpr) {
			return visitor.visitComparisonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExprContext extends ExpressionContext {
	public NOT(): TerminalNode { return this.getToken(FileMakerCalcParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterNotExpr) {
			listener.enterNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitNotExpr) {
			listener.exitNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitNotExpr) {
			return visitor.visitNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(FileMakerCalcParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(FileMakerCalcParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetFunctionContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(FileMakerCalcParser.LET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_letFunction; }
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterLetFunction) {
			listener.enterLetFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitLetFunction) {
			listener.exitLetFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitLetFunction) {
			return visitor.visitLetFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FileMakerCalcParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FileMakerCalcParser.IDENTIFIER, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public arrayNotation(): ArrayNotationContext[];
	public arrayNotation(i: number): ArrayNotationContext;
	public arrayNotation(i?: number): ArrayNotationContext | ArrayNotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayNotationContext);
		} else {
			return this.getRuleContext(i, ArrayNotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayNotationContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_arrayNotation; }
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterArrayNotation) {
			listener.enterArrayNotation(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitArrayNotation) {
			listener.exitArrayNotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitArrayNotation) {
			return visitor.visitArrayNotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FileMakerCalcParser.IDENTIFIER);
		} else {
			return this.getToken(FileMakerCalcParser.IDENTIFIER, i);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_fieldReference; }
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterFieldReference) {
			listener.enterFieldReference(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitFieldReference) {
			listener.exitFieldReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitFieldReference) {
			return visitor.visitFieldReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FileMakerCalcParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NumberLiteralContext extends LiteralContext {
	public NUMBER(): TerminalNode { return this.getToken(FileMakerCalcParser.NUMBER, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(FileMakerCalcParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BOOLEAN(): TerminalNode { return this.getToken(FileMakerCalcParser.BOOLEAN, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JsonConstantLiteralContext extends LiteralContext {
	public JSON_CONSTANT(): TerminalNode { return this.getToken(FileMakerCalcParser.JSON_CONSTANT, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FileMakerCalcListener): void {
		if (listener.enterJsonConstantLiteral) {
			listener.enterJsonConstantLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FileMakerCalcListener): void {
		if (listener.exitJsonConstantLiteral) {
			listener.exitJsonConstantLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FileMakerCalcVisitor<Result>): Result {
		if (visitor.visitJsonConstantLiteral) {
			return visitor.visitJsonConstantLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


