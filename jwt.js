// For encoding and decoding jwt's
var base64Url = require('base64url-util'),
    jws       = require('jws'),
    jwe       = require('jwe'),
    jwa       = require('jwa');


function jwt(head, payload, signature)
{
  // If it looks like we only has something in head, try extracting the head,
  // payload and signature from head
  if (head && !payload && !signature)
  {
    
  }

  this.head      = head      || {};
  this.payload   = payload   || {};
  this.signature = signature || {};

  /**
   * @name sign
   * @description - Signs the jwt using supplied signature
   * @returns {string} - The signed JWT
   */
  this.sign = function()
  {

  };

  this.encode = function()
  {

  };

  this.validate = function(jwt)
  {
    // Verify that JWT contains at least one period ('.') character
    if (jwt.indexOf(/\./) === -1)
      return false;

    // Split the JWT into portions separated by period(s)
    jwt = jwt.split('.');

    // Let encoded header be portion before first period character
    var header = jwt[0];

    // Base64url decode the encoded header
    if (base64Url.validate(header))
      header = base64Url.decode(header);

    // Verify that the resulting octect sequence is a UTF-8 encoded
    // representation of a completely valid JSON object

    // Verify that the resulting JOSE header includes only parameters and
    // values whose syntax and semantics are both understood and supported
    // or that are specified as being ignore when not understood

    // Determine whether the 'enc' member of the decoded header exists. If so
    // this is a jwe, otherwise it is a jws


  };

  this.verifySignature = function()
  {

  };

  this. decode = function()
  {

  }
}

module.exports = jwt;