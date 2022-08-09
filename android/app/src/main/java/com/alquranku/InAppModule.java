package com.alquranku;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Map;
import java.util.HashMap;

public class InAppModule extends ReactContextBaseJavaModule {

    private int eventCount = 0;

    InAppModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "InAppModule";
    }

//    @ReactMethod
//    public void createInAppModule(Callback callback){
//        Log.d("InApp Module", "Logged from in app module");
//        callback.invoke("Data returned from native in app module");
//    }
//
//    @ReactMethod
//    public void createInAppModulePromise(Promise promise){
//        try{
//            promise.resolve("data returned from promise");
//            eventCount += 1;
//            sendEvent(getReactApplicationContext(), "EventCount", eventCount);
//        }catch (Exception e){
//            promise.reject("error returned from promise", e);
//        }
//    }
//
//    private void sendEvent(ReactContext reactContext,
//                           String eventName,
//                           int params) {
//        reactContext
//                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                .emit(eventName, params);
//    }
}