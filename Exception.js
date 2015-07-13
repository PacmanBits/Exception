/*
//////////////////////////////////////////////////
//                                              //
//                                              //
//    Exception              Sanford Gifford    //
//    v1.0.1                    May 18, 2015    //
//                                              //
//                                              //
//////////////////////////////////////////////////

A basic Exception object with type and message.
Includes the ability to look up and reverse lookup
types, as well as a toString method.
*/

function Exception(message, type)
{
	this.message = message ;
	this.type    = type    ;
	
	var me = this;
	
	this.LookupType = function()
	{
		if(typeof Exception.TypeLookup[me.type] !== "undefined")
			return Exception.TypeLookup[me.type];
		else
			return "UnknownExceptionType";
	}
}

Exception.TypeLookup = [
	"Unavailable"       , // 0 - Requested action is not available for given object or parameters
	"UnrecognisedType"  , // 1 - An unrecognised, or unsupported type was specified
	"NotYetImplemented" , // 2 - Action is not yet implemented
	"ExternalFailure"     // 3 - A call to an external program or script (usually AJAX) has failed
];

Exception.Types = {};

Exception.prototype.toString = function()
{
	return this.message;
};

(function()
{
	for(var e in Exception.TypeLookup)
	{
		Exception.Types[Exception.TypeLookup[e]] = e;
	}
})(); // closure to protect 'e' namespace
