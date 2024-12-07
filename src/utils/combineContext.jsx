export default function combineContext(...providers) {
    /**
     * This combines multiple context provider together and returns a single context provider
     */
    return ({ children }) => {
        return providers.reduceRight((accumulator, Currentprovider) => {
            return <Currentprovider>{accumulator}</Currentprovider>;
        }, children /* Initial Value */);
    };
}


/** [A, B, C, D]
 * <A>
 *  <B>
 *      <C>
 *          <D>
 *          {children}
 *         </D>
 *      </C>
 *   </B>
 * </A>
 */

/**
 * <BModified />
 */

/**
 * <Combined>
 * {children}
 * </Combined>
 */