/**
 *
 * @public
 * @instance
 * @method addClass
 * @description Add one or more classNames to the nodes.
 * @param {string} classes The space-separated classNames
 *
 */
module.exports = function ( classes ) {
    this._nodeList.forEach(function ( element ) {
        var newClass = classes.split( " " ),
            elsClass = element.className.split( " " );

        newClass.forEach(function ( klass ) {
            if ( elsClass.indexOf( klass ) === -1 ) {
                elsClass.push( klass );
            }
        });

        element.className = elsClass.join( " " );
    });

    return this;
};