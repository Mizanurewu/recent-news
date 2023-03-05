import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h2>Terms and conditions:</h2>
      <p>
        <small>1. License: The Company grants the User a limited, non-exclusive,
        non-transferable license to use the Software for personal or commercial
        use, subject to the terms and conditions of this Agreement. Proprietary
        Rights: The Software and all intellectual property rights therein are
        and shall remain the sole property of the Company. The User shall not
        reverse engineer, decompile, disassemble, or otherwise attempt to derive
        the source code of the Software. </small><br></br><br></br>
        
        <small>2. Restrictions: The User shall not
        modify, rent, lease, loan, sell, distribute, or create derivative works
        based on the Software in whole or in part.</small><br></br><br></br>
        
        <small>3. Warranty Disclaimer: The
        Software is provided on an "as is" basis, without warranty of any kind,
        either express or implied, including without limitation any warranty for
        information services, uninterrupted access, or products provided through
        or in connection with the Software, including without limitation the
        warranties of merchantability or fitness for a particular purpose. The
        Company does not warrant that the functions contained in the Software
        will meet the User's requirements or that the operation of the Software
        will be uninterrupted or error-free. </small><br></br><br></br>
        
        <small>4. Limitation of Liability: In no
        event shall the Company be liable for any damages whatsoever, including
        without limitation direct, indirect, incidental, special, punitive, or
        consequential damages, arising out of the use of or inability to use the
        Software, even if the Company has been advised of the possibility of
        such damages. </small><br></br><br></br>
        
        <small> 5. Termination: This Agreement is effective until
        terminated. The User may terminate this Agreement at any time by
        destroying all copies of the Software. This Agreement will also
        terminate upon conditions set forth elsewhere in this Agreement or if
        the User fails to comply with any term or condition of this Agreement.
        Upon termination, the User must destroy all copies of the Software. 
        </small><br></br><br></br>
        <small>6. Governing Law: This Agreement shall be governed by and construed in
        accordance with the laws of the [Jurisdiction], without giving effect to
        any principles of conflicts of law. </small><br></br><br></br>
        
        <small>7. Entire Agreement: This Agreement
        constitutes the entire agreement between the parties and supersedes all
        prior or contemporaneous agreements or representations, written or oral,
        concerning the subject matter of this Agreement. 
        </small><br></br><br></br>
        <small>8. Modification: The Company may modify the terms and conditions of this Agreement at any
        time, and such modifications shall be effective immediately upon posting
        of the modified agreement. The User agrees to review the Agreement
        periodically to be aware of such modifications. 
        </small><br></br><br></br>
        <small>9. Waiver: The failure of either party to require performance by the other party of any
        provision of this Agreement shall not affect in any way the full right
        to require such performance at any time thereafter. A waiver of any
        breach of any provision of this Agreement shall not be taken or held to
        be a waiver of the provision itself.</small><br></br><br></br>
      </p>
      <p> GO back to :<Link to='/register'>Register</Link></p>
    </div>
  );
};

export default TermsAndConditions;
