using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEditor.PlayerSettings;

public class CameraMovement : MonoBehaviour
{
    [SerializeField] float CamSpeed = 1.0f;
    [SerializeField] float dist;
    [SerializeField] private Camera mCam;
    [SerializeField] BoomScript mBoom;

    Vector3 mLookAt;
    /*camera rotates on the spot*/
    void Update()
    {
        // when mouse moves in X catch
        float mouPos = Input.GetAxis("Mouse X");
        // Debug.Log(mouPos);

        // if boomLength is more than max dist or boomLength is less than min dist, zoom is not activated
        if (mBoom.BoomLength() < BoomScript.maxDistance && BoomScript.minDistance < mBoom.BoomLength())
        {
            ZoomCamera();
        }
        else
        {
            Debug.Log("too long/short");
        }
        // camera rotates about the y axis
        // GetComponent<Transform>.Rotation(mouPos);

        // update where camera is supposed to look
        mLookAt = mBoom.mbase;
        // Debug.Log("pos (from update) is now: " + mLookAt);
        CameraLookAt(mLookAt);
    }
    
    /// <summary>
    /// using the mouse wheel, scrolls camera further or closer to MC pos
    /// </summary>
    void ZoomCamera()
    {
        /// scrolling cam with getaxis: https://www.youtube.com/watch?v=Txnyxo5M6D0
        
        // first guard against input
        dist = Input.GetAxis("Mouse ScrollWheel") * CamSpeed;
        if(dist == 0)
        {
            return;
        }
        Debug.Log("scroll wheel input is: " + dist);
 
        // guards against missing components
        if (!mCam)
        {
            Debug.Log("found no camera");
            return;
        }
        if (!mBoom)
        {
            Debug.Log("found no boom");
        }
        
        Vector3 MCpos = Vector3.zero;
        Vector3 CAMpos = Vector3.zero;

        if (transform.parent != null)
        {
            MCpos = transform.parent.Find("body").position;
        }
        if (this.transform != null)
        {
            CAMpos = transform.position;
        }

        // find new vector C from A(MC pos) and B(CAM pos) and send to Boom        
        mBoom.SetCamPosScroll(NewGoalPos(dist, MCpos, CAMpos));
       
        /// wasn't necessary /// scrolling for UI elements video: https://www.youtube.com/watch?v=rAqyi85IAJ0
        /// wasn't necessary /// Unity documentation on wheel events: https://docs.unity3d.com/ScriptReference/UIElements.WheelEvent.html
    }
    
    /// <summary>
    /// finds new Vector3 from original MC pos (A) and Cam Pos (B) using mouse wheel input
    /// </summary>
    /// <param name="t">mouse wheel input using getAxis</param>
    /// <param name="A">MC pos, mesh body</param>
    /// <param name="B">Camera original position</param>
    /// <returns></returns>
    Vector3 NewGoalPos(float t, Vector3 A, Vector3 B)
    {
        // use dist and positions to use linear transformation!
        Vector3 goalPos = new Vector3();

        goalPos.x = B.x + t*(A.x - B.x);
        goalPos.y = B.y + t*(A.y - B.y);
        goalPos.z = B.z + t*(A.z - B.z);

        // Debug.Log("The new C vector is: " + goalPos);
        return goalPos;
    }
    
    /*when mouse clicks on an object which is not MC, the camera will zoom in on it, when reaching a value, it will pause*/

    /// <summary>
    /// Angles the camera towards mBoom.mBase (LookAt) Vector3
    /// </summary>
    /// <param name="pos">Vector3 LookAt from mBoom.mBase</param>
    void CameraLookAt(Vector3 pos)
    {
        /// resource for figuring out angles: https://www.youtube.com/watch?v=RQHG_Tv9vzA
        transform.rotation = Quaternion.LookRotation(pos - transform.position, Vector3.up);
        // Debug.Log("pos (from method) is now: " + pos);
        // Quaternion.SetFromToRotation(this.transform.position, -pos);

        // Debug.Log("this. identity rotation: " + Quaternion.identity);

    }

}
