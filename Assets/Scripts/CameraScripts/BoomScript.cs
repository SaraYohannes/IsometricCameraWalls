using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoomScript : MonoBehaviour
{
    /*
     * 
     * Intent: Regulates the distance to MC and objects the camera wants to focus on
     * 
     */

    /* Where is MC? ✅
     * Where is camera? ✅
     * decide the distance between MC and camera - max and min distance(absolute values) ✅ */

    /*zoom in and out by scrolling mousewheel ✅*/

    /*detect other objects that can be focused on*/

    /*detect when mouse double-LMB on that object - catch Descriptor from that object and show in own thing*/

    /*boom 'loans' to the double-LMB'd object
    /*naturall zoom in/out
    /*boom returns to MC
    */

    /**/

    // distances between camera and object
    public const float maxDistance = 25.0f;
    public const float minDistance = 5.0f;

    // where the camera should be pointed towards
    [SerializeField] public Vector3 mbase;
    // MC position
    private Vector3 MCpos;
    // Camera position
    private Vector3 CAMpos;
    // position Boom is focused on
    private Vector3 focusPos;
    // distance between MC and CAM positions
    [SerializeField] private float currentDistance;
    [SerializeField] GameObject mCamera;

    // object the player has selected
    [SerializeField] public GameObject mSelectedObj;

    private float yrotateCounter;

    // Update is called once per frame
    void Update()
    {
        // decide what to focus on
        if (mSelectedObj != null)
        {
            // Interactable GameObject player clicked
            focusPos = mSelectedObj.transform.position;
        }
        else 
        {
            focusPos = transform.parent.Find("body").position;
        }
        
        // this variable is used by CameraMovement.cs
        mbase = focusPos;

        /*
        * // continusly update MCs position
        * if (transform.parent != null)
        * {
        *     MCpos = transform.parent.Find("body").position;
        *     mbase = MCpos;
        * }
        */

        // continously update camera position
        if (this.transform != null)
        {
            CAMpos = transform.position;
        }

        // check distance between camera and MC,
        currentDistance = BoomLength();
        if (currentDistance < minDistance)
        { // currentDistance is less than minimum distance
            Debug.Log("boom too short");
            this.transform.position = SetCamPos(1);
        }
        else if (currentDistance > maxDistance) 
        { // currentDistance is more than maximum distance
            Debug.Log("boom too long");
            this.transform.position = SetCamPos(0);
        }

        // is the guard to check if middle mouse button is being held down
        /// resource for keyCodes: https://docs.unity3d.com/ScriptReference/KeyCode.html
        if (Input.GetKey(KeyCode.Mouse2))
        {
            Debug.Log("The middleMouse button is being held down!");
            SwingBoom();
        }
    }

    void SwingBoom()
    {
        // the speed of the mouse moving in X axis
        float mouseX_value = Input.GetAxis("Mouse X");
        float mouseY_value = Input.GetAxis("Mouse Y");
        RotateAroundPoint(mouseX_value, mouseY_value, focusPos);
    }

    /// <summary>
    /// finds the distance between the 'body' mesh object and 'cam' camera object in the 'testChar' object
    /// </summary>
    /// <returns></returns>
    public float BoomLength()
    {
        return Vector3.Distance(focusPos, CAMpos);
    }
    /// <summary>
    /// DEPRECATED
    /// lerps between the cam and the body with the fixed increment t = 0.5f
    /// </summary>
    /// <returns></returns>
    Vector3 SetCAMpos()
    {
        /// lerping between two points, Unity documentation: https://docs.unity3d.com/ScriptReference/Vector3.Lerp.html
        float t = 0.5f;

        // Lerp from camera's current position to MC's position
        return Vector3.Lerp(CAMpos, focusPos, t);
    }
    /// <summary>
    /// when cam is outside allowed dist, this will find the correct vector for either min or max allowed dist
    /// </summary>
    /// <param name="n">1 for too close, 0 for too far away</param>
    /// <returns>a new position for the camera to sit, at either the min dist vec, or the max dist vector</returns>
    Vector3 SetCamPos(int n)
    {
        Vector3 goalPos = new Vector3();
        // find direction
        if (n == 0)
        {
            Debug.Log("triggered BoomScript.SetCamPos, too far away!");
            goalPos.x = CAMpos.x + 0.1f * (focusPos.x - CAMpos.x);
            goalPos.y = CAMpos.y + 0.1f * (focusPos.y - CAMpos.y);
            goalPos.z = CAMpos.z + 0.1f * (focusPos.z - CAMpos.z);
        }
        else
        {   // unexpected behaviour
            Debug.Log("triggered BoomScript.SetCamPos, too close!");
            goalPos.x = CAMpos.x + 0.1f * (focusPos.x + CAMpos.x);
            goalPos.y = CAMpos.y + 0.1f * (focusPos.y + CAMpos.y);
            goalPos.z = CAMpos.z + 0.1f * (focusPos.z + CAMpos.z);
            Debug.Log("New vector position for camera is: " + goalPos);
        }
        return goalPos;
    }

    /// <summary>
    /// sets cam's position to a new vector decided by CameraMovement component
    /// </summary>
    /// <param name="goalPos">Vector found by CameraMovement.NewGoalPos(float t, vector3 A, Vector 3 B)</param>
    public void SetCamPosScroll(Vector3 goalPos)
    {
        this.transform.position = goalPos;
    }


    /// <summary>
    /// Rotates camera around a pivot point in the scene. Uses
    /// transform.RotateAround to pivot camera in X and Y direction. Has 
    /// max and min y angles, uses global float (yrotateCounter) to clamp 
    /// rotation in y direction.
    /// </summary>
    /// <param name="xdir">Input from getAxis(Mouse X)</param>
    /// <param name="ydir">Input from getAxis(Mouse Y)</param>
    void RotateAroundPoint(float xdir, float ydir, Vector3 pos)
    {
        float maxY = 60.0f;
        float minY = 30.0f;

        float xspeed = xdir * 30 * Time.deltaTime;
        float yspeed = ydir * 30 * Time.deltaTime;
        
        if (yrotateCounter + yspeed > maxY)
        {
            yspeed = maxY - yrotateCounter;
        }
        else if (yrotateCounter + yspeed < minY)
        {
            yspeed = minY - yrotateCounter;
        }

        transform.RotateAround(pos, new Vector3(0, 1, 0), xspeed);

        transform.RotateAround(pos, new Vector3(1, 0, 0), yspeed);

        yrotateCounter += yspeed;
    }
}


