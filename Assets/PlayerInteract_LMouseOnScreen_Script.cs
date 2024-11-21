using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// INTENT: Watches for Player using Left Mouse Button clicks on Objects in the Scene
//         then passes the reference to other scripts
public class PlayerInteract_LMouseOnScreen_Script : MonoBehaviour
{
    [SerializeField] private GameObject SelectedObject;
    public BoomScript mBoom;

    // Start is called before the first frame update
    void Start()
    {
        
    }
    // Update is called once per frame
    void Update()
    {
        // listen for LMB click (select GameObject)
        if (Input.GetKey(KeyCode.Mouse0))
        {
            PlayerRaycast(Input.mousePosition);
        }
        // listen for RMB click (clear reference to GameObject)
        if (Input.GetKey(KeyCode.Mouse1))
        {
            ClearSelection();
        }
    }
    /// <summary>
    /// handles if the LMB has been clicked on a valid GameObject. 
    /// Checks if BoomScript is attached. If both are true, the 
    /// reference to the GameObject is passed to BoomScript.
    /// </summary>
    /// <param name="pos">Mouse position on screen</param>
    void PlayerRaycast(Vector3 pos)
    {
        // trigger BoomScript if the GameObject is valid
        if (!mBoom) { return; }
        // sends GameObject to BoomScript
        if (CheckHit(pos) != 0)
        {
            return;
        }
        else 
        { 
            mBoom.mSelectedObj = SelectedObject; 
        }
    }
    /// <summary>
    /// method handeling LMB raycast logic. returns -1/0 depending on an 
    /// object was clicked or not.
    /// If true, 'GameObject SelectedObject' gets the reference to that 
    /// object
    /// </summary>
    /// <param name="pos">Mouse position on screen</param>
    /// <returns></returns>
    int CheckHit(Vector3 pos)
    {
        RaycastHit hit;
        
        if (!Physics.
            Raycast(Camera.allCameras[0].ScreenPointToRay(pos), out hit, 1000))
        { 
            return -1; 
        }
        else
        {
            GameObject selected = hit.collider.gameObject;
            if (selected.tag != "Interactable")
            {
                Debug.Log("The selected object was: " + selected.tag);
                selected = null;
                return -1;
            }
            else
            {
                SelectedObject = selected;
            }
        }
        return 0;
    }
    /// <summary>
    /// when method is called, reference 'GameObject SelectedObject' is set to NULL
    /// </summary>
    void ClearSelection()
    {
        // clear ref to GameObject
        SelectedObject = null;
        mBoom.mSelectedObj = SelectedObject;
    }
}
