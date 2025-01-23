// Generated from FileMakerCalc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FileMakerCalcLexer extends Lexer {
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
	public static readonly T__17 = 18;
	public static readonly AND = 19;
	public static readonly OR = 20;
	public static readonly NOT = 21;
	public static readonly LET = 22;
	public static readonly BOOLEAN = 23;
	public static readonly NUMBER = 24;
	public static readonly STRING = 25;
	public static readonly IDENTIFIER = 26;
	public static readonly BLOCK_COMMENT = 27;
	public static readonly LINE_COMMENT = 28;
	public static readonly WS = 29;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "AND", "OR", "NOT", "LET", "BOOLEAN", "NUMBER", "STRING", "IDENTIFIER", 
		"BLOCK_COMMENT", "LINE_COMMENT", "WS", "DIGIT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'['", "']'", "'*'", "'/'", "'+'", "'-'", "'&'", 
		"'='", "'\u2260'", "'<'", "'>'", "'\u2264'", "'\u2265'", "';'", "','", 
		"'::'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "AND", "OR", "NOT", 
		"LET", "BOOLEAN", "NUMBER", "STRING", "IDENTIFIER", "BLOCK_COMMENT", "LINE_COMMENT", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FileMakerCalcLexer._LITERAL_NAMES, FileMakerCalcLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FileMakerCalcLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FileMakerCalcLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "FileMakerCalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return FileMakerCalcLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FileMakerCalcLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FileMakerCalcLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FileMakerCalcLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1F\xD0\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\x86\n\x18\x03\x19\x06\x19\x89\n\x19\r\x19\x0E\x19" +
		"\x8A\x03\x19\x03\x19\x06\x19\x8F\n\x19\r\x19\x0E\x19\x90\x05\x19\x93\n" +
		"\x19\x03\x19\x03\x19\x06\x19\x97\n\x19\r\x19\x0E\x19\x98\x05\x19\x9B\n" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\xA1\n\x1A\f\x1A\x0E\x1A\xA4" +
		"\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x07\x1B\xAA\n\x1B\f\x1B\x0E\x1B" +
		"\xAD\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\xB3\n\x1C\f\x1C\x0E" +
		"\x1C\xB6\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x07\x1D\xC1\n\x1D\f\x1D\x0E\x1D\xC4\v\x1D\x03\x1D\x03" +
		"\x1D\x03\x1E\x06\x1E\xC9\n\x1E\r\x1E\x0E\x1E\xCA\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\xB4\x02\x02 \x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
		"\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02\x02\x03\x02\x10\x04\x02CCcc\x04\x02" +
		"PPpp\x04\x02FFff\x04\x02QQqq\x04\x02TTtt\x04\x02VVvv\x04\x02NNnn\x04\x02" +
		"GGgg\x05\x02\f\f\x0F\x0F$$\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02\f\f" +
		"\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x03\x022;\x02\xDC\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x03?\x03" +
		"\x02\x02\x02\x05A\x03\x02\x02\x02\x07C\x03\x02\x02\x02\tE\x03\x02\x02" +
		"\x02\vG\x03\x02\x02\x02\rI\x03\x02\x02\x02\x0FK\x03\x02\x02\x02\x11M\x03" +
		"\x02\x02\x02\x13O\x03\x02\x02\x02\x15Q\x03\x02\x02\x02\x17S\x03\x02\x02" +
		"\x02\x19U\x03\x02\x02\x02\x1BW\x03\x02\x02\x02\x1DY\x03\x02\x02\x02\x1F" +
		"[\x03\x02\x02\x02!]\x03\x02\x02\x02#_\x03\x02\x02\x02%a\x03\x02\x02\x02" +
		"\'d\x03\x02\x02\x02)h\x03\x02\x02\x02+k\x03\x02\x02\x02-o\x03\x02\x02" +
		"\x02/\x85\x03\x02\x02\x021\x9A\x03\x02\x02\x023\x9C\x03\x02\x02\x025\xA7" +
		"\x03\x02\x02\x027\xAE\x03\x02\x02\x029\xBC\x03\x02\x02\x02;\xC8\x03\x02" +
		"\x02\x02=\xCE\x03\x02\x02\x02?@\x07*\x02\x02@\x04\x03\x02\x02\x02AB\x07" +
		"+\x02\x02B\x06\x03\x02\x02\x02CD\x07]\x02\x02D\b\x03\x02\x02\x02EF\x07" +
		"_\x02\x02F\n\x03\x02\x02\x02GH\x07,\x02\x02H\f\x03\x02\x02\x02IJ\x071" +
		"\x02\x02J\x0E\x03\x02\x02\x02KL\x07-\x02\x02L\x10\x03\x02\x02\x02MN\x07" +
		"/\x02\x02N\x12\x03\x02\x02\x02OP\x07(\x02\x02P\x14\x03\x02\x02\x02QR\x07" +
		"?\x02\x02R\x16\x03\x02\x02\x02ST\x07\u2262\x02\x02T\x18\x03\x02\x02\x02" +
		"UV\x07>\x02\x02V\x1A\x03\x02\x02\x02WX\x07@\x02\x02X\x1C\x03\x02\x02\x02" +
		"YZ\x07\u2266\x02\x02Z\x1E\x03\x02\x02\x02[\\\x07\u2267\x02\x02\\ \x03" +
		"\x02\x02\x02]^\x07=\x02\x02^\"\x03\x02\x02\x02_`\x07.\x02\x02`$\x03\x02" +
		"\x02\x02ab\x07<\x02\x02bc\x07<\x02\x02c&\x03\x02\x02\x02de\t\x02\x02\x02" +
		"ef\t\x03\x02\x02fg\t\x04\x02\x02g(\x03\x02\x02\x02hi\t\x05\x02\x02ij\t" +
		"\x06\x02\x02j*\x03\x02\x02\x02kl\t\x03\x02\x02lm\t\x05\x02\x02mn\t\x07" +
		"\x02\x02n,\x03\x02\x02\x02op\t\b\x02\x02pq\t\t\x02\x02qr\t\x07\x02\x02" +
		"r.\x03\x02\x02\x02st\x07V\x02\x02tu\x07t\x02\x02uv\x07w\x02\x02v\x86\x07" +
		"g\x02\x02wx\x07H\x02\x02xy\x07c\x02\x02yz\x07n\x02\x02z{\x07u\x02\x02" +
		"{\x86\x07g\x02\x02|}\x07v\x02\x02}~\x07t\x02\x02~\x7F\x07w\x02\x02\x7F" +
		"\x86\x07g\x02\x02\x80\x81\x07h\x02\x02\x81\x82\x07c\x02\x02\x82\x83\x07" +
		"n\x02\x02\x83\x84\x07u\x02\x02\x84\x86\x07g\x02\x02\x85s\x03\x02\x02\x02" +
		"\x85w\x03\x02\x02\x02\x85|\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x86" +
		"0\x03\x02\x02\x02\x87\x89\x05=\x1F\x02\x88\x87\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x92" +
		"\x03\x02\x02\x02\x8C\x8E\x070\x02\x02\x8D\x8F\x05=\x1F\x02\x8E\x8D\x03" +
		"\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03" +
		"\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x8C\x03\x02\x02\x02\x92\x93\x03" +
		"\x02\x02\x02\x93\x9B\x03\x02\x02\x02\x94\x96\x070\x02\x02\x95\x97\x05" +
		"=\x1F\x02\x96\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x96\x03" +
		"\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x88\x03" +
		"\x02\x02\x02\x9A\x94\x03\x02\x02\x02\x9B2\x03\x02\x02\x02\x9C\xA2\x07" +
		"$\x02\x02\x9D\xA1\n\n\x02\x02\x9E\x9F\x07$\x02\x02\x9F\xA1\x07$\x02\x02" +
		"\xA0\x9D\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02" +
		"\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02" +
		"\xA4\xA2\x03\x02\x02\x02\xA5\xA6\x07$\x02\x02\xA64\x03\x02\x02\x02\xA7" +
		"\xAB\t\v\x02\x02\xA8\xAA\t\f\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAD\x03" +
		"\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC6\x03" +
		"\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x071\x02\x02\xAF\xB0\x07" +
		",\x02\x02\xB0\xB4\x03\x02\x02\x02\xB1\xB3\v\x02\x02\x02\xB2\xB1\x03\x02" +
		"\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB4\xB2\x03\x02" +
		"\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x07," +
		"\x02\x02\xB8\xB9\x071\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\b\x1C\x02" +
		"\x02\xBB8\x03\x02\x02\x02\xBC\xBD\x071\x02\x02\xBD\xBE\x071\x02\x02\xBE" +
		"\xC2\x03\x02\x02\x02\xBF\xC1\n\r\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4" +
		"\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5" +
		"\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC6\b\x1D\x02\x02\xC6:\x03" +
		"\x02\x02\x02\xC7\xC9\t\x0E\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCA\x03" +
		"\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03" +
		"\x02\x02\x02\xCC\xCD\b\x1E\x02\x02\xCD<\x03\x02\x02\x02\xCE\xCF\t\x0F" +
		"\x02\x02\xCF>\x03\x02\x02\x02\x0F\x02\x85\x8A\x90\x92\x98\x9A\xA0\xA2" +
		"\xAB\xB4\xC2\xCA\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FileMakerCalcLexer.__ATN) {
			FileMakerCalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FileMakerCalcLexer._serializedATN));
		}

		return FileMakerCalcLexer.__ATN;
	}

}

